import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
          }
        }
      }
    `
  )

  const { defaultTitle, defaultDescription } = site.siteMetadata
  const meta = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <Helmet title={meta.title}>
      <html lang="en" />
      <meta name="description" content={meta.description} />
      <meta name="og:type" content="website" />
      {meta.title && <meta name="og:title" content={meta.title} />}
      {meta.description && (
        <meta name="og:description" content={meta.description} />
      )}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}

export default SEO
