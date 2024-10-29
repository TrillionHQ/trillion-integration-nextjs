import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        urlImports: [
            'https://cdn.jsdelivr.net/npm/trillion-viewer@0.36.1/build-lib/trillion-viewer.js',
            'https://sdk.trillion.jewelry/viewer/',
            'https://sdk.trillion.jewelry/widget/'
        ]
    },
};

export default nextConfig;
