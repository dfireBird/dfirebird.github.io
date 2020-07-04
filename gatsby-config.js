const fetch = require(`node-fetch`)

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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "Anilist",
        fieldName: "anilist",
        url: "https://graphql.anilist.co",
        fetch: (uri, options = {}) => {
          const { query, variables } = JSON.parse(options.body)
          return fetch(uri, {
            ...options,
            headers: {
              ...options.headers,
              accept: "application/json",
            },
            body: JSON.stringify({
              query: query,
              variables: variables,
            }),
          })
        },
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
        short_name: "A Programmer's Journey",
        start_url: "/",
        display: "standalone",
        icon: "static/favicon.png",
        background_color: "#ffffff",
        theme_color: "#ffffff",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
