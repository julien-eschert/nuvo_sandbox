/** @type {import('next').NextConfig} */
// this used to be in the guide (nuvo docs)
const withTM = require('next-transpile-modules')(['nuvo-react'])
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
