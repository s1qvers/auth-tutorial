/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
  webpack: (config, { dev, isServer }) => {
    // Оптимизация для разработки
    if (dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
        runtimeChunk: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig; 