const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const path = createFilePath({ node, getNode, trailingSlash: false })
    const slug = `blog/posts${path}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
