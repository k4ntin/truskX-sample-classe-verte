import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FieldWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
`

interface FieldProps {
    children: ReactNode
}

const Field = (props: FieldProps): JSX.Element => {
  return (
    <FieldWrapper>{ props.children }</FieldWrapper>
  )
}

export default Field