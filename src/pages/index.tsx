import styled from '@emotion/styled'
import Footer from 'components/Common/Footer'
import GlobalStyle from 'components/Common/GlobalStyle'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { PostListItemType } from 'types/PostItem.types'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

// type IndexPageProps = {
//   data: {
//     allMarkdownRemark: {
//       edges: [
//         {
//           node: {
//             id: string
//             frontmatter: {
//               title: string
//               summary: string
//               date: string
//               categories: string[]
//               thumbnail: {
//                 publicURL: string
//               }
//             }
//           }
//         },
//       ]
//     }
//   }
// }

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  )
}

export default IndexPage
