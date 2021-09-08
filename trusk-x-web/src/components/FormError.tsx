import React from 'react'
import styled from 'styled-components'

import ColorPalette from '../styleguide/colorPalette'

const FormErrorWrapper = styled.div`
  align-items: center;
  color: ${ColorPalette.truskRed};
  display: flex;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  width: 100%;
`

interface FormErrorProps {
    error: string
}

const FormError = (props: FormErrorProps): JSX.Element => {
  return (
    <FormErrorWrapper id='form-error'>{ props.error }</FormErrorWrapper>
  )
}

export default FormError