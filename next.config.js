const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname:
  //         "image.tmdb.org/t/p/original//e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
  //       port: "",
  //       pathname: "/Navbar/**",
  //     },
  //   ],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "image.tmdb.org/t/p/original/",
  //       port: "",
  //       pathname: "pages/index/**",
  //     },
  //   ],
  // },
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
