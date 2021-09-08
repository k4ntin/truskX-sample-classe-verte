import React, { ReactNode } from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const FormWrapper = styled.div`
  background-color: ${ColorPalette.truskBlue};  
  border-radius: 8px;
  box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.02),
    0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035),
    0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05),
    0 0px 80px rgba(0, 0, 0, 0.07)
  ;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(1, 1fr);
  padding: 24px;
`

interface FormProps {
    children: ReactNode
}

const Form = (props: FormProps): JSX.Element => {
  return (
    <FormWrapper id='form'>{ props.children }</FormWrapper>
  )
}

export default Form