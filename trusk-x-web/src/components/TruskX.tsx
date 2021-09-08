import React, { ReactNode } from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  align-items: center;
  background-color: rgba(5, 48, 255, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`

interface TruskXProps {
    children: ReactNode
}

const TruskX = (props: TruskXProps): JSX.Element => {
  return (
    <AppWrapper>{ props.children }</AppWrapper>
  )
}

export default TruskX