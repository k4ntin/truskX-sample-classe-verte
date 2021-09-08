import React, { ReactNode } from 'react'
import styled from 'styled-components'
import ColorPalette from '../styleguide/colorPalette'

const LabelWrapper = styled.div`
  color: ${ColorPalette.truskText};
  font-size: 1rem;
  font-weight: 350;
  opacity: 0.75;
`

interface LabelProps {
    children: ReactNode
}

const Label = (props: LabelProps): JSX.Element => {
  return (
    <LabelWrapper>{ props.children }</LabelWrapper>
  )
}

export default Label