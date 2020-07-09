import React from "react"
import { graphql } from "gatsby"
import Styles from "./projects.module.css"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"

export default ({ data }) => {
  const projects = data.allProjectsJson
  return (
    <Layout tabTitle="Projects" pageTitle="My Projects">
      <div className={Styles.content}>
        {projects.edges.map(({ node }) => (
          <ProjectCard
            title={node.name}
            description={node.description}
            sourceLink={node.sourceLink}
            link={node.link}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          description
          sourceLink
          link
        }
      }
    }
  }
`
