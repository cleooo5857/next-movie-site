const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    NEXT_PUBLIC_KAKAO_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
  },
  images: {
    domains: ["image.tmdb.org", "k.kakaocdn.net"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //     },

  //   ];
  // },
};
