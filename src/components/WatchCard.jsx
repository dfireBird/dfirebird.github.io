import React from "react"
import Card from "./Card"
import Style from "./WatchCard.module.css"

function WatchCard(props) {
  return (
    <Card>
      <div>
        <img src={props.coverImage} alt={`${props.title} cover`} />
      </div>
      <div className={Style.content}>
        <h3>{props.title}</h3>
        <div className={Style.genres}>
          <p>Genres:</p>
          {props.genres.slice(0, 2).map(genre => (
            <p className={Style.genre}>{genre}</p>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default WatchCard
