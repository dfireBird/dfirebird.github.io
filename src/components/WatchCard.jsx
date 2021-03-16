import React from "react"
import Card from "./Card"
import Style from "./WatchCard.module.css"

function WatchCard(props) {
  if (!props.title) {
    return null
  }
  return (
    <Card>
      <div className={Style.image}>
        <img
          src={props.coverImage}
          alt={`${props.title} cover`}
          height={"300px"}
        />
      </div>
      <div className={Style.content}>
        <h3>{props.title}</h3>
      </div>
    </Card>
  )
}

export default WatchCard
