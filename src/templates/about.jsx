import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ children }) {
  return (
    <Layout tabTitle="About" pageTitle="About Me">
      {children}
    </Layout>
  )
}
