import { graphql, Link } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`

const textStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle}></Global>
      <div css={textStyle}>{title}</div>
      {description} <br />
      {author} <br />
      <Link to="/">To Main</Link>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
