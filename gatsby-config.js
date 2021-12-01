// const gatsbyRequiredRules = path.join(
//   process.cwd(),
//   "node_modules",
//   "gatsby",
//   "dist",
//   "utils",
//   "eslint-rules"
// );

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // {
    //   resolve: "gatsby-plugin-eslint",
    //   options: {
    //     // Gatsby required rules directory
    //     rulePaths: [gatsbyRequiredRules],
    //     // Default settings that may be ommitted or customized
    //     stages: ["develop"],
    //     extensions: ["js", "jsx", "ts", "tsx"],
    //     exclude: ["node_modules", "bower_components", ".cache", "public"],
    //     // Any additional eslint-webpack-plugin options below
    //     // ...
    //   },
    // },
  ],
};
