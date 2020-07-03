import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Styles from "./projects.module.css"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout tabTitle="Projects" pageTitle="My Projects">
      <div className={Styles.content}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
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
