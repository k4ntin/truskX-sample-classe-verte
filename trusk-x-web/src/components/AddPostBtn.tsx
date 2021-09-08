import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import ColorPalette from '../styleguide/colorPalette'
import AppRoutes from '../routes/routes'

const FloatingActionButton = styled.div`
  align-items: center;
  background-color: ${ColorPalette.truskBlue};
  border-radius: 50px;
  bottom: 62px;
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

const AddPostIcon = styled.img``

const AddPostBtn = (): JSX.Element => {
  const history = useHistory()

  const goToAddPost = (): void => {
    history.push(AppRoutes.POST_FORM)
  }

  return (
    <FloatingActionButton id='add-post' onClick={goToAddPost}>
      <AddPostIcon alt='add post icon' src='/images/post.png' width={30} />
    </FloatingActionButton>
  )
}

export default AddPostBtn