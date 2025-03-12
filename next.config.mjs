/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.notion.so https://*.notion.so",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://www.notion.so',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
