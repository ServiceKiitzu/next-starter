/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
  },
};

module.exports = nextConfig;
