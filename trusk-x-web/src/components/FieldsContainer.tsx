import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FieldsContainerWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
`

interface FieldsContainerProps {
    children: ReactNode
}

const FieldsContainer = (props: FieldsContainerProps): JSX.Element => {
  return (
    <FieldsContainerWrapper>{ props.children }</FieldsContainerWrapper>
  )
}

export default FieldsContainer