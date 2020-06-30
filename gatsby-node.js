const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const path = createFilePath({ node, getNode })
    let slug = path
    if (path.includes("post")) {
      slug = `blog${path}`
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    let component
    if (node.fields.slug.includes("about")) {
      component = path.resolve("./src/templates/about.jsx")
    } else if (node.fields.slug.includes("post")) {
      component = path.resolve("./src/templates/blog-post.jsx")
    }
    createPage({
      path: node.fields.slug,
      component: component,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
