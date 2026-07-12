import type { NextConfig } from "next";

// Static export for GitHub Pages (project site served under /stockhours-landing).
const repo = "stockhours-landing";
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: { unoptimized: true }, // no image optimizer on Pages
  trailingSlash: true, // emit dir/index.html so routes resolve on Pages
  // unoptimized next/image does NOT prepend basePath to src — expose it so
  // ImageSlot can prefix /public asset paths itself.
  env: { NEXT_PUBLIC_BASE_PATH: `/${repo}` },
};

export default nextConfig;
