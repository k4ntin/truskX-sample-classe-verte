import React, {Fragment, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'

import AppRoutes from './routes'
import ColorPalette from '../styleguide/colorPalette'
import environment from '../environment'
import {IPost} from '../domain/post'

import Link from '../components/Link'
import LogoutBtn from '../components/LogoutBtn'
import TruskX from '../components/TruskX'

const PostAuthor = styled.div`
  margin-top: 16px;
  color: ${ColorPalette.truskBlue};
  font-size: 0.8rem;
  font-weight: normal;
  opacity: 0.6;
`

const PostDate = styled.div`
  margin-top: 16px;
  color: ${ColorPalette.truskBlue};
  font-size: 0.8rem;
  font-weight: normal;
  opacity: 0.6;
`

const PostBody = styled.div`
  margin-top: 16px;

`

const PostDetails = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PostTitle = styled.div`
  margin-top: 16px;
  font-size: 1.4rem;
  font-weight: 600;
`

const Post = (): JSX.Element  => {
  const history = useHistory()
  const [post, setPost] = useState<IPost | null>(null)
  const {postId}: {postId: string} = useParams()

  const goToLogin = () => {
    history.replace(AppRoutes.LOGIN)
  }

  const goToPosts = () => {
    history.replace(AppRoutes.POSTS)
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) fetch(`${environment.apiBaseUrl}/employees/auth/token?jwt=${jwt}`)
      .then(() => {
        fetch(`${environment.apiBaseUrl}/posts/${postId}`)
          .then((response) => response.json())
          .then((data) => setPost(data))
      })
      .catch(() => goToLogin())
  }, [])


  return (
    <TruskX>
      <PostDetails id='post-details'>
        <Link id='posts-list' onClick={goToPosts}>Liste des articles</Link>
        {post && (
          <Fragment>
            <PostTitle id='post-title'>{post.title}</PostTitle>
            <PostAuthor id='post-author'>par {post.author.name}</PostAuthor>
            <PostBody id='post-body'>{post.body}</PostBody>
            <PostDate id='post-date'>le {new Date(post.createdAt).toLocaleDateString()}</PostDate>
          </Fragment>
        )}
      </PostDetails>
      <LogoutBtn />
    </TruskX>
  )
}

export default Post