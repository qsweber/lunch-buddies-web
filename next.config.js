// `npm run build` uses webpack (`next build --webpack`) rather than
// Turbopack, matching website-template.

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
