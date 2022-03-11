import React from "react"
import Card from "./Card"
import * as Style from "./ProjectCard.module.css"

function ProjectCard(props) {
  return (
    <Card>
      <div className={Style.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={Style.links}>
        <Links sourceLink={props.sourceLink} link={props.link} />
      </div>
    </Card>
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
