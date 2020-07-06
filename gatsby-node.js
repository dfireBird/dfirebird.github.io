const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const path = createFilePath({ node, getNode }).split("/")
    const fileName = path[path.length - 2]
    const postType = path[path.length - 3]
    let filePath

    switch (postType) {
      case "post":
        filePath = `/blog/post/${fileName}/`
        break
      case "projects":
        filePath = `/projects/`
        break
      case "about":
        filePath = `/about/`
        break
      default:
        throw new Error("Invalid post type")
    }

    createNodeField({
      node,
      name: `type`,
      value: postType,
    })

    createNodeField({
      node,
      name: `slug`,
      value: filePath,
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
    } else if (node.fields.slug.includes("project")) {
      component = path.resolve("./src/templates/projects.jsx")
    }
    createPage({
      path: node.fields.slug,
      component: component,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  createPage({
    path: "/watchlist",
    component: path.resolve("./src/templates/watchlist.jsx"),
    context: {
      page: 1,
      userId: 466289,
    },
  })
}
