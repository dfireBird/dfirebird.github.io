import React from "react"
import { graphql } from "gatsby"
import * as Styles from "./projects.module.css"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"

export default ({ data }) => {
  const projects = data.allProjectsJson
  return (
    <Layout tabTitle="Projects" pageTitle="My Projects">
      <div className={Styles.container}>
        <div className={Styles.content}>
          {projects.edges.map(({ node }) => (
            <ProjectCard
              key={node.id}
              title={node.name}
              description={node.description}
              sourceLink={node.sourceLink}
              link={node.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          name
          description
          sourceLink
          link
        }
      }
    }
  }
`
