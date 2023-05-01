/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: config => {
    config.resolve.fallback = { fs: false }
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
