import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import AppRoutes from './routes'
import environment from '../environment'

const Post = (): JSX.Element  => {
  const history = useHistory()

  const goToLogin = () => {
    history.replace(AppRoutes.LOGIN)
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) fetch(`${environment.apiBaseUrl}/employees/auth/token?jwt=${jwt}`)
      .catch(() => goToLogin())
  }, [])

  return (
    <Fragment />
  )
}

export default Post