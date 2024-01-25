/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //   eslint: {
  //     ignoreDuringBuilds: true,
  //   },
  images: {
    unoptimized: true,
  },
};

// const withCSS = require("@zeit/next-css");
// const compose = require("next-compose");
// cssConfig = {};
// (module.exports = compose([
//   [withCSS, cssConfig],
//   {
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.mp3$/,
//         use: {
//           loader: "file-loader",
//         },
//       });
//       return config;
//     },
//   },
// ])),
//   nextConfig;

module.exports = nextConfig;
