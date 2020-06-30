module.exports = {
  siteMetadata: {
    title: "A Programmer's Journey",
    description: "Portfolio and Blog of Aadhish Sriram.",
    author: "dfireBird",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "A Programmer's Journey",
        start_url: "/",
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
