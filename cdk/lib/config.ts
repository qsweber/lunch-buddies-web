export interface DnsRecord {
  zoneId: string;
  name: string;
  /**
   * A/AAAA are alias records pointing at the CloudFront distribution
   * (required at a zone apex). CNAME points at the distribution's domain.
   */
  type: "A" | "AAAA" | "CNAME";
}

export interface EnvConfig {
  env: string;
  account: string;
  region: string;
  /** S3 bucket (static website hosting) that holds the built site. */
  bucketName: string;
  /** CloudFront's ID for the S3 origin. Kept as-is for imported distributions. */
  originId: string;
  /** Hostnames the CloudFront distribution serves. The first is the site URL. */
  aliases: string[];
  /** ACM certificate (us-east-1) covering every alias. */
  certificateArn: string;
  records: DnsRecord[];
}
