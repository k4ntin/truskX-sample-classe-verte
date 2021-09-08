import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AppRoutes from './routes/routes'

import Home from './routes/Home'
import Login from './routes/Login'
import Logout from './routes/Logout'
import Post from './routes/Post'
import PostForm from './routes/PostForm'
import Posts from './routes/Posts'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path={AppRoutes.INDEX}>
        <Home />
      </Route>
      <Route exact path={AppRoutes.LOGIN}>
        <Login />
      </Route>
      <Route exact path={AppRoutes.LOGOUT}>
        <Logout />
      </Route>
      <Route exact path={AppRoutes.POST_FORM}>
        <PostForm />
      </Route>
      <Route exact path={AppRoutes.POSTS}>
        <Posts />
      </Route>
      <Route exact path={AppRoutes.POST_TMPL}>
        <Post />
      </Route>
    </BrowserRouter>
  )
}

export default App
