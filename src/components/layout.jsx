import React from "react"
import { Link } from "gatsby"
import Styles from "./layout.module.css"
import SEO from "./seo"
import ThemeToggle from "./ThemeToggle"

function Layout({ tabTitle, pageTitle, description, children }) {
  return (
    <div className={Styles.container}>
      <SEO title={tabTitle} description={description} />
      <ThemeToggle
        styles={{ position: "absolute", right: 0, top: 0, margin: "15px" }}
      />
      <div className={Styles.nav}>
        <div className={Styles.nav__left}>
          <Link to="/">
            <h3>A Programmer's Journey</h3>
          </Link>
        </div>

        <div className={Styles.nav__right}>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/watchlist">Watch List</Link>
          </nav>
        </div>
      </div>
      <div className={Styles.title}>
        <h1>{pageTitle}</h1>
      </div>
      {children}
      <div className={Styles.footer}>
        <footer>
          Aadhish Sriram &copy; 2022. This website is built with{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>. The source can be
          found on{" "}
          <a href="https://github.com/dfireBird/dfireBird.github.io">Github</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
