import React from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const ButtonWrapper = styled.div`
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

const ButtonText = styled.div`
  color: ${ColorPalette.truskText};
  font-size: 1.1rem;
  font-weight: 550;
`

interface ButtonProps {
    id: string
    label: string
    onClick: () => void
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper id={props.id} onClick={props.onClick}>
      <ButtonText>{ props.label }</ButtonText>
    </ButtonWrapper>
  )
}

export default Button