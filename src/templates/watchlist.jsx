import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WatchCard from "../components/WatchCard"
import Style from "./watchlist.module.css"

export default ({ data }) => {
  let titles = data.anilist.AnimePage.mediaList

  return (
    <Layout tabTitle="Watchlist" pageTitle="Watch List">
      <div className={Style.container}>
        <div className={Style.content}>
          {titles.map(({ media }) => (
            <WatchCard
              key={media.id}
              title={media.title.english || media.synonyms[0]}
              coverImage={media.coverImage.large}
              genres={media.genres}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query watchlist($page: Int, $userId: Int) {
    anilist {
      AnimePage: Page(page: $page, perPage: 10) {
        pageInfo {
          currentPage
          lastPage
        }
        mediaList(userId: $userId, status: CURRENT) {
          media {
            id
            type
            genres
            coverImage {
              large
            }
            title {
              english
            }
            synonyms
          }
        }
      }
    }
  }
`
