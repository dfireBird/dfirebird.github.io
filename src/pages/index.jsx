import React from "react"
import { Link } from "gatsby"
import * as indexStyle from "./index.module.css"
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
        (specialized in web developement) from the South Asian penisular State -
        India. I'm currently working at{" "}
        <a href="https://www.ibm.com/consulting">IBM</a>. I graduated with an
        Engineering with a major in Computer Science at SASTRA University. I am
        constantly learning something new and sharing my experiences here. I'm
        learning Phoenix currenly on my free time after work and try to use that
        for building a pastebin like text-storage site.
      </p>

      <p>
        When I'm not programming, I pass my time by reading manga or watching
        shows. I'm interested in reading about Lamba Caculus, Functional
        Programming and Compiler Theory.
      </p>

      <div className={indexStyle.links}>
        <strong>More about me!</strong>
        <div>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About me</Link>
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
