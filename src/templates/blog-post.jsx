import React from "react"
import { graphql } from "gatsby"
import * as Styles from "./blog-post.module.css"
import Layout from "../components/layout.jsx"

export default function BlogPost({ data, children }) {
  const post = data.mdx
  return (
    <Layout
      tabTitle={post.frontmatter.title}
      pageTitle={post.frontmatter.title}
    >
      <h5 className={Styles.date}>Published on: {post.frontmatter.date}</h5>
      <div className={Styles.content}>{children}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`
