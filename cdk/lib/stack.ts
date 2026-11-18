import { App, CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { CfnBucket, CfnBucketPolicy } from "aws-cdk-lib/aws-s3";
import { CfnDistribution } from "aws-cdk-lib/aws-cloudfront";
import { CfnRecordSet } from "aws-cdk-lib/aws-route53";
import { DnsRecord, EnvConfig } from "./config";

// Fixed hosted zone ID that Route 53 uses for every CloudFront alias target.
const CLOUDFRONT_HOSTED_ZONE_ID = "Z2FDTNDATAQYW2";

// "www.lunchbuddiesapp.com" + "A" -> "WwwLunchbuddiesappComARecord".
function recordLogicalId(record: DnsRecord): string {
  const name = record.name
    .split(".")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
    .replace(/[^A-Za-z0-9]/g, "");
  return `${name}${record.type === "CNAME" ? "CName" : record.type}Record`;
}

// Matches website-template's stack, except where the production resources
// (created by hand before CDK) differ and are kept as they are so that
// `cdk import` adopts them without changes: no bucket versioning, 404.html
// as the error document, and a configurable origin ID.
export class LunchBuddiesWebStack extends Stack {
  constructor(scope: App, id: string, cfg: EnvConfig, props: StackProps) {
    super(scope, id, props);

    const bucket = new CfnBucket(this, "Bucket", {
      bucketName: cfg.bucketName,
      bucketEncryption: {
        serverSideEncryptionConfiguration: [
          {
            serverSideEncryptionByDefault: {
              sseAlgorithm: "AES256",
            },
          },
        ],
      },
      websiteConfiguration: {
        indexDocument: "index.html",
        errorDocument: "404.html",
      },
      ownershipControls: {
        rules: [{ objectOwnership: "ObjectWriter" }],
      },
      publicAccessBlockConfiguration: {
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      },
    });
    bucket.applyRemovalPolicy(RemovalPolicy.RETAIN);

    const bucketPolicy = new CfnBucketPolicy(this, "BucketPolicy", {
      bucket: bucket.ref,
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: "*",
            Action: ["s3:GetObject"],
            Resource: [`arn:aws:s3:::${cfg.bucketName}/*`],
          },
        ],
      },
    });
    bucketPolicy.applyRemovalPolicy(RemovalPolicy.RETAIN);
    bucketPolicy.addResourceDependency(bucket);

    const distribution = new CfnDistribution(this, "Distribution", {
      distributionConfig: {
        enabled: true,
        aliases: cfg.aliases,
        defaultRootObject: "index.html",
        ipv6Enabled: true,
        comment: "",
        priceClass: "PriceClass_All",
        httpVersion: "http2",
        origins: [
          {
            id: cfg.originId,
            domainName: `${cfg.bucketName}.s3-website-${cfg.region}.amazonaws.com`,
            customOriginConfig: {
              httpPort: 80,
              httpsPort: 443,
              originProtocolPolicy: "http-only",
              originSslProtocols: ["TLSv1", "TLSv1.1", "TLSv1.2"],
            },
          },
        ],
        defaultCacheBehavior: {
          targetOriginId: cfg.originId,
          viewerProtocolPolicy: "redirect-to-https",
          allowedMethods: ["GET", "HEAD"],
          cachedMethods: ["GET", "HEAD"],
          compress: true,
          minTtl: 31536000,
          defaultTtl: 31536000,
          maxTtl: 31536000,
          forwardedValues: {
            queryString: false,
            cookies: {
              forward: "none",
            },
          },
        },
        restrictions: {
          geoRestriction: {
            restrictionType: "none",
          },
        },
        viewerCertificate: {
          acmCertificateArn: cfg.certificateArn,
          sslSupportMethod: "sni-only",
          minimumProtocolVersion: "TLSv1.2_2021",
        },
      },
    });
    distribution.applyRemovalPolicy(RemovalPolicy.RETAIN);
    distribution.addResourceDependency(bucket);

    for (const record of cfg.records) {
      const recordSet =
        record.type === "CNAME"
          ? new CfnRecordSet(this, recordLogicalId(record), {
              name: record.name,
              type: "CNAME",
              hostedZoneId: record.zoneId,
              ttl: "3600",
              resourceRecords: [distribution.attrDomainName],
            })
          : new CfnRecordSet(this, recordLogicalId(record), {
              name: record.name,
              type: record.type,
              hostedZoneId: record.zoneId,
              aliasTarget: {
                dnsName: distribution.attrDomainName,
                hostedZoneId: CLOUDFRONT_HOSTED_ZONE_ID,
                evaluateTargetHealth: false,
              },
            });
      recordSet.applyRemovalPolicy(RemovalPolicy.RETAIN);
      recordSet.addResourceDependency(distribution);
    }

    new CfnOutput(this, "DistributionId", { value: distribution.ref });
    new CfnOutput(this, "SiteUrl", { value: `https://${cfg.aliases[0]}` });
    new CfnOutput(this, "S3BucketUri", { value: `s3://${cfg.bucketName}` });
  }
}
