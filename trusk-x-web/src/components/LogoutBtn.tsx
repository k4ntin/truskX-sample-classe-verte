import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import ColorPalette from '../styleguide/colorPalette'
import AppRoutes from '../routes/routes'

const FloatingActionButton = styled.div`
  align-items: center;
  background-color: ${ColorPalette.truskRed};
  border-radius: 50px;
  bottom: 8px;
  box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px;
  right: 8px;
  position: fixed;
`

const LogoutIcon = styled.img`
  height: 30px;
  object-fit: cover;
  width: 30px;
`

const LogoutBtn = (): JSX.Element => {
  const history = useHistory()

  const goToLogout = (): void => {
    history.push(AppRoutes.LOGOUT)
  }

  return (
    <FloatingActionButton id='logout' onClick={goToLogout}>
      <LogoutIcon alt='logout icon' src='/images/logout.png'/>
    </FloatingActionButton>
  )
}

export default LogoutBtn