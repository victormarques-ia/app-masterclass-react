/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,

  // TODO: Not work with /app directory
  // experimental: {
  //   swcPlugins: [["swc-plugin-coverage-instrument", {}]],
  // },
};

module.exports = nextConfig;
