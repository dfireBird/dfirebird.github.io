import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Styles from "./blog-post.module.css"
import Layout from "../components/layout.jsx"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout
      tabTitle={post.frontmatter.title}
      pageTitle={post.frontmatter.title}
    >
      <h4 className={Styles.date}>Published on: {post.frontmatter.date}</h4>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`
