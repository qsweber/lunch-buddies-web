# Lunch Buddies Web

The landing page for installing [Lunch Buddies](https://github.com/qsweber/lunch-buddies), served at
[lunchbuddiesapp.com](https://lunchbuddiesapp.com). Built with [Next.js](https://nextjs.org/) (App
Router, static export) and structured like
[website-template](https://github.com/qsweber/website-template).

## Available Scripts

### `npm run dev`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the site and exports it as static files to the `out` folder.

### `npm run lint`

Runs ESLint across the project using the repository's flat config.

### `npx playwright test`

Runs the Playwright smoke tests in `tests/` against the static export in `out/` (run
`npm run build` first). Each page must render with no first-party console errors.

## Deployment

AWS CDK (`cdk/`) manages the S3 bucket, CloudFront distribution and Route 53 records (in the
`lunchbuddiesapp.com` zone) for two stacks:

- `lunch-buddies-web-dev`: [dev.lunchbuddiesapp.com](https://dev.lunchbuddiesapp.com), deployed
  by every pull request
- `lunch-buddies-web-production`: [lunchbuddiesapp.com](https://lunchbuddiesapp.com) and its `www`
  subdomain, deployed on every push to `master`

To work with it locally:

```bash
cd cdk
npm install
npx cdk diff lunch-buddies-web-dev        # or lunch-buddies-web-production
npx cdk deploy lunch-buddies-web-dev
```

CI (`.github/workflows/ci.yml`) authenticates to AWS with the `github-actions-deploy` OIDC role,
runs `cdk deploy`, smoke-tests the build, syncs `out/` to S3, invalidates the CloudFront
distribution, and then checks that the live site responds.
