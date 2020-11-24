import React from "react"
import { Link } from "gatsby"
import indexStyle from "./index.module.css"
import SEO from "../components/seo"
import ThemeToggle from "../components/ThemeToggle"

export default () => (
  <div className={indexStyle.indexContainer}>
    <SEO title="Home" />
    <ThemeToggle
      styles={{ position: "absolute", right: 0, top: 0, margin: "15px" }}
    />
    <div className={indexStyle.articleContainer}>
      <h1>Hi! I am Aadhish Sriram!</h1>

      <p>
        I go by an alias of <em>dfireBird</em> online. I am a software developer
        (specialized in web developement) from the South Asian state penisular
        state - India. I'm currently studying my Engineering course with major
        of Computer Science in SASTRA University. I am constantly learning
        something new and share my experiences. I'm currently working on few
        projects to improve my knowledge such as implementing Chess game in Rust
        using ggez or learning Haskell.
      </p>

      <p>
        When I'm not programming, I pass my time by reading manga or watching
        shows. I'm planning to read about Lamba Caculus and Functional
        Programming more.
      </p>

      <div className={indexStyle.links}>
        <strong>More about me!</strong>
        <div>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About me</Link>
          <Link to="/watchlist">Watch List</Link>
        </div>
      </div>

      <div className={indexStyle.contact}>
        <strong>Stalk me!</strong>
        <div>
          <a href="https://github.com/dfireBird">Github</a>
          <a href="https://discord.gg/programming">Discord</a>
          <a href="https://twitter.com/dfireBird_">Twitter</a>
        </div>
      </div>
    </div>
  </div>
)
