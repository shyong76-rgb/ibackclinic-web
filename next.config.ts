import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "d8j0ntlcm91z4.cloudfront.net" },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
