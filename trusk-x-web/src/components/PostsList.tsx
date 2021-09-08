import React from 'react'
import styled from 'styled-components'

import { IPost } from '../domain/post'
import ColorPalette from '../styleguide/colorPalette'

const PostsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
  padding: 24px;
  width: calc(100% - 48px);
`

const PostsGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`

const PostWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;
  cursor: pointer;
  padding: 24px;
  width: calc(100% - 48px);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`

const PostGrid = styled.div`
  cursor: pointer;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`

const PostTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
`

const PostDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const PostDetail = styled.div`
  color: ${ColorPalette.truskBlue};
  font-size: 0.8rem;
  font-weight: normal;
  opacity: 0.6;
`

interface PostsProps {
    posts: IPost[]
}

const PostsList = (props: PostsProps): JSX.Element => {
  return (
    <PostsWrapper id='posts-wrapper'>
      <PostsGrid>
        { props.posts.map(post => {
          const postIndex = props.posts.indexOf(post)

          return (
            <PostWrapper id={`post-wrapper-${postIndex}`} key={post._id}>
              <PostGrid>
                <PostTitle id={`post-title-${postIndex}`}>{post.title}</PostTitle>
                <PostDetails>
                  <PostDetail id={`post-author-${postIndex}`}>par {post.author.name}</PostDetail>
                  <PostDetail id={`post-date-${postIndex}`}>&nbsp;le {new Date(post.createdAt).toLocaleDateString()}</PostDetail>
                </PostDetails>
              </PostGrid>
            </PostWrapper>
          )
        })}
      </PostsGrid>
    </PostsWrapper>
  )
}

export default PostsList