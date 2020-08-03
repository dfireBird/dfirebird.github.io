import React from "react"
import { Link, graphql } from "gatsby"
import Styles from "./blog.module.css"
import Layout from "../components/layout"

function blog({ data }) {
  return (
    <Layout tabTitle="Blog" pageTitle="Blog Posts">
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2 className={Styles.blogTitle}>{node.frontmatter.title}</h2>
          </Link>
          <h3 className={Styles.subTitle}>{node.frontmatter.date}</h3>
          <p className={Styles.excerpt}>
            {node.excerpt} <Link to={node.fields.slug}>Read more</Link>
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default blog

export const query = graphql`
  query retrieveBlogs {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fields: { type: { eq: "post" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
