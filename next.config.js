import withImages from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'i.pravatar.cc'],
  },
};

export default withImages(nextConfig);
