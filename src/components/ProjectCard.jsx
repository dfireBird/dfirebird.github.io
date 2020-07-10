import React from "react"
import Style from "./ProjectCard.module.css"

function ProjectCard(props) {
  return (
    <div className={Style.card}>
      <div className={Style.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <Links sourceLink={props.sourceLink} link={props.link} />
      </div>
    </div>
  )
}

const Links = props => {
  if (props.sourceLink && props.link) {
    return (
      <>
        <a href={props.sourceLink} className={Style.link}>
          Source
        </a>
        <a href={props.link} className={Style.link}>
          Link
        </a>
      </>
    )
  } else if (props.sourceLink) {
    return (
      <a href={props.sourceLink} className={Style.link}>
        Source
      </a>
    )
  } else if (props.link) {
    return (
      <a href={props.link} className={Style.link}>
        Link
      </a>
    )
  }
}

export default ProjectCard
