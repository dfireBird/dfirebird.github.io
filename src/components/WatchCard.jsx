import React from "react"
import Card from "./Card"
import Style from "./WatchCard.module.css"

function WatchCard(props) {
  if (!props.title || props.genres.length < 2) {
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
        <div className={Style.genres}>
          <p>Genres:</p>
          {props.genres.slice(0, 2).map((genre, i) => (
            <p className={Style.genre} key={i}>
              {genre.length > 10 ? `${genre.slice(0, 5)}⠀...` : genre}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default WatchCard
