import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import AppRoutes from './routes'

const Logout = (): JSX.Element  => {
  const history = useHistory()

  const goToLogin = () => {
    history.push(AppRoutes.LOGIN)
  }

  useEffect(() => {
    localStorage.removeItem('token')
    goToLogin()
  }, [])

  return (
    <Fragment />
  )
}

export default Logout