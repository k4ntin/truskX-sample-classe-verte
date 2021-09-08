import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import io from 'socket.io-client'

import AppRoutes from './routes'
import environment from '../environment'

import AddPostBtn from '../components/AddPostBtn'
import LogoutBtn from '../components/LogoutBtn'
import PostsList from '../components/PostsList'
import TruskX from '../components/TruskX'

const socket = io(environment.socketsBaseUrl)

const Posts = (): JSX.Element  => {
  const history = useHistory()

  const goToLogin = () => {
    history.replace(AppRoutes.LOGIN)
  }

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) fetch(`${environment.apiBaseUrl}/employees/auth/token?jwt=${jwt}`)
      .then(() => {
        fetch(`${environment.apiBaseUrl}/posts`)
          .then((response) => response.json())
          .then((data) => setPosts(data))
      })
      .catch(() => goToLogin())
    else goToLogin()
  }, [])

  useEffect(() => {
    const eventName = 'post_refresh-many'
    const eventHandler = () =>  fetch(`${environment.apiBaseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
    socket.on(eventName, eventHandler)
    return () => {
      socket.off(eventName, eventHandler)
    }
  })

  useEffect(() => {
    const eventName = 'post_refresh-one'
    const eventHandler = () =>  fetch(`${environment.apiBaseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
    socket.on(eventName, eventHandler)
    return () => {
      socket.off(eventName, eventHandler)
    }
  })

  return (
    <TruskX>
      {posts && (
        <PostsList posts={posts} />
      )}
      <AddPostBtn />
      <LogoutBtn />
    </TruskX>
  )
}

export default Posts