import type { NextConfig } from "next";

// Static export for GitHub Pages (project site served under /stockhours-landing).
const repo = "stockhours-landing";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: { unoptimized: true }, // no image optimizer on Pages
  trailingSlash: true, // emit dir/index.html so routes resolve on Pages
};

export default nextConfig;
