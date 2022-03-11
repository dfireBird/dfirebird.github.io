import React from "react"
import Layout from "../components/layout"
import * as Styles from "./404.module.css"
import _404 from "../images/404.svg"

export default () => (
  <Layout tabTitle="Not found" pageTitle="Page not found!">
    <p>Sorry! The page you request is not found.</p>
    <img src={_404} className={Styles.image_404} alt="404! Page not found!" />
  </Layout>
)
