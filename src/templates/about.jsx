import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout tabTitle="About" pageTitle="About Me">
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`
