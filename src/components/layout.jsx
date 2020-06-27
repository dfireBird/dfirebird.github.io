import React from "react"
import { Link } from "gatsby"
import Styles from "./layout.module.css"

function Layout(props) {
  return (
    <div className={Styles.container}>
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
      {props.children}
      <div className={Styles.footer}>
        <footer>
          Aadhish Sriram &copy; 2020. This website is built with{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>. The source can be
          found{" "}
          <a href="https://github.com/dfireBird/dfireBird.github.io">here</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
