import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/carlin-invests-funnel" : "",
  assetPrefix: isGitHubPages ? "/carlin-invests-funnel/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
