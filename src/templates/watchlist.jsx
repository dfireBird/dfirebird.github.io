import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import WatchCard from "../components/WatchCard"
import * as Style from "./watchlist.module.css"

export default ({ data }) => {
  let animeList = data.anilist.anime.mediaList
  let mangaList = data.anilist.manga.mediaList

  return (
    <Layout tabTitle="Watchlist" pageTitle="Watch List">
      <div className={Style.container}>
        {animeList.length !== 0 ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <h4>Oops! It seems like, I'm not watch anything</h4>
        )}
        {mangaList.length !== 0 ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <h4>Oops! It seems like, I'm not reading anything</h4>
        )}
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
