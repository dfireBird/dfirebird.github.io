import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  let titles = data.anilist.AnimePage.mediaList

  return (
    <Layout tabTitle="Watchlist" pageTitle="Watch List">
      <p>I currently watch or read these manga and anime: </p>
      {titles.map(({ media }) => (
        <div key={media.id}>
          <h3>{media.title.romaji}</h3>
          <img
            src={media.coverImage.large}
            alt={`${media.title.romaji} cover`}
          />
          <p>
            The genre of this {media.type.toLowerCase()} is {media.genres[0]}
          </p>
        </div>
      ))}
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
              romaji
            }
          }
        }
      }
    }
  }
`
