import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import AppRoutes from './routes'
import environment from '../environment'

const Home = (): JSX.Element  => {
  const history = useHistory()

  const goToLogin = () => {
    history.replace(AppRoutes.LOGIN)
  }

  const goToPosts = () => {
    history.replace(AppRoutes.POSTS)
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) fetch(`${environment.apiBaseUrl}/employees/auth/token?jwt=${jwt}`)
      .then(() => goToPosts())
      .catch(() => goToLogin())
    else goToLogin()
  }, [])

  return (
    <Fragment />
  )
}

export default Home