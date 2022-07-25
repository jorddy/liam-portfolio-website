/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true
    }
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
};
