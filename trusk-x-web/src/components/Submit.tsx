import React from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const SubmitWrapper = styled.div`
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

const SubmitText = styled.div`
  color: ${ColorPalette.truskText};
  font-size: 1.1rem;
  font-weight: 550;
`

interface SubmitProps {
    label: string
    onClick: () => void
}

const Submit = (props: SubmitProps): JSX.Element => {
  return (
    <SubmitWrapper id='submit' onClick={props.onClick}>
      <SubmitText>{ props.label }</SubmitText>
    </SubmitWrapper>
  )
}

export default Submit