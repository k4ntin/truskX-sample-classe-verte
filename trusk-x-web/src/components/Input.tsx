import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const StyledInput = styled.input`
  border: 1px ${ColorPalette.truskYellow} solid;
  color: ${ColorPalette.buttonBg};
  font-family: 'ITCAvantGarde', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  font-size: 1rem;
  font-weight: 350;
  height: 30px;
  min-width: 230px;
  outline: none;
  padding: 8px;
  width: calc(100% - 16px);
  
  &::placeholder {
    opacity: 0.5;
  }
`

interface InputProps {
  id: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: string
  value: string
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <StyledInput
      id={props.id}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
}

export default Input