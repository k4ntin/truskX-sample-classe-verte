import React from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const  LinkWrapper = styled.div`
  align-items: center;
  background-color: ${ColorPalette.buttonBg};
  border-bottom-color: ${ColorPalette.truskYellow};  
  border-bottom-style: solid;
  border-bottom-width: 2px;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 4px;
  width: calc(100% - 8px);
`

const  LinkText = styled.div`
  color: ${ColorPalette.truskText};
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
`

interface  LinkProps {
    children: string
    id: string
    onClick: () => void
}

const  Link = (props:  LinkProps): JSX.Element => {
  return (
    <LinkWrapper id={props.id} onClick={props.onClick}>
      <LinkText>{ props.children }</LinkText>
    </LinkWrapper>
  )
}

export default  Link