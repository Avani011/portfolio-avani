import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This will configure Next.js to use static export
  basePath: '/portfolio-avani', // Replace this with your repository name
  assetPrefix: '/portfolio-avani', // This ensures assets are correctly linked in GitHub Pages

  // Optionally you could add more settings like trailingSlash for correct URLs
  trailingSlash: true,
};

export default nextConfig;
