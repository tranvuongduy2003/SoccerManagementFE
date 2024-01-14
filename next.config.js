/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL
  },
  webpack(config) {
    return config;
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'scontent.fsgn2-8.fna.fbcdn.net',
      'platform-lookaside.fbsbx.com',
      'scontent.fsgn21-1.fna.fbcdn.net',
      'images.unsplash.com',
      'images.squarespace-cdn.com',
      'cdn-icons-png.flaticon.com',
      'c8.alamy.com',
      'www.shutterstock.com',
      'img.freepik.com',
      'myleague.vn',
      'www.google.com',
      'cryptoast.fr',
      'cdn.tuoitre.vn',
      'assets.goal.com',
      'cdn1.tuoitre.vn',
      'upload.wikimedia.org'
    ]
  }
};

module.exports = nextConfig;
