/** @type {import('next').NextConfig} */
// next.config.js
const withVideos = require('next-videos')

const nextConfig = withVideos({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    })
    return config
  },
})

// module.exports = withImages({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// })

module.exports = nextConfig
