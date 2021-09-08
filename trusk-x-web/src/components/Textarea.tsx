import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const StyledTextarea = styled.textarea`
  border: 1px ${ColorPalette.truskYellow} solid;
  color: ${ColorPalette.buttonBg};
  font-family: 'ITCAvantGarde', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  font-size: 1rem;
  font-weight: 350;
  height: 200px;
  min-width: 250px;
  outline: none;
  padding: 8px;
  width: calc(100% - 16px);
`

interface TextareaProps {
  id: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
}

const Textarea = (props: TextareaProps): JSX.Element => {
  return (
    <StyledTextarea
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default Textarea