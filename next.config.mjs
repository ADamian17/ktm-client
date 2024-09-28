/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@use "_mantine.scss" as *;`,
  },
};

export default nextConfig;
