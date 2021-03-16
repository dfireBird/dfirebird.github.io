import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WatchCard from "../components/WatchCard"
import Style from "./watchlist.module.css"

export default ({ data }) => {
  let animeList = data.anilist.anime.mediaList
  let mangaList = data.anilist.manga.mediaList

  return (
    <Layout tabTitle="Watchlist" pageTitle="Watch List">
      <div className={Style.container}>
        <h4>I currently watch these anime:</h4>
        <div className={Style.content}>
          {animeList.map(({ media }) => (
            <WatchCard
              key={media.id}
              title={media.title.english}
              coverImage={media.coverImage.large}
            />
          ))}
        </div>
        <h4>I currently read these mangas:</h4>
        <div className={Style.content}>
          {mangaList.map(({ media }) => (
            <WatchCard
              key={media.id}
              title={media.title.english}
              coverImage={media.coverImage.large}
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
      anime: Page(page: $page, perPage: 50) {
        pageInfo {
          currentPage
          lastPage
        }
        mediaList(userId: $userId, status: CURRENT, type: ANIME) {
          media {
            id
            type
            coverImage {
              large
            }
            title {
              english
            }
          }
        }
      }
      manga: Page(page: $page, perPage: 50) {
        pageInfo {
          currentPage
          lastPage
        }
        mediaList(userId: $userId, status: CURRENT, type: MANGA) {
          media {
            id
            type
            coverImage {
              large
            }
            title {
              english
            }
          }
        }
      }
    }
  }
`
