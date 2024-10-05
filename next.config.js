// /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'i.pravatar.cc'],
  },
};

// const withImages = require('next-images');
// module.exports = withImages();

module.exports = nextConfig;

// const withImages = require('next-images');
// module.exports = withImages();

// module.exports = {
//   output: 'export', // <=== enables static exports
//   reactStrictMode: true,
//   images: {
//     domains: ['randomuser.me', 'i.pravatar.cc'],
//   },
// };
