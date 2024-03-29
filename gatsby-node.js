const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx" || node.internal.type === "ProjectsJson") {
    const path = createFilePath({ node, getNode }).split("/")
    const fileName = path[path.length - 2]
    const postType = path[path.length - 3]
    let filePath

    switch (postType) {
      case "post":
        filePath = `/posts/${fileName.replaceAll("-", "/")}/`
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
            internal {
              contentFilePath
            }
          }
        }
      }
      allProjectsJson {
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
      component: `${component}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/projects.jsx"),
    })
  })
}
