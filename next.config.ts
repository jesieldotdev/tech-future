import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite todos os domínios
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,  // Isso vai ignorar erros de compilação do TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true,  // Isso vai ignorar erros do ESLint durante o build
  },
};

export default nextConfig;
