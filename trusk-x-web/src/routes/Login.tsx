import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import AppRoutes from './routes'
import environment from '../environment'

import Field from '../components/Field'
import FieldsContainer from '../components/FieldsContainer'
import Form from '../components/Form'
import FormError from '../components/FormError'
import Input from '../components/Input'
import Label from '../components/Label'
import Submit from '../components/Submit'
import TruskX from '../components/TruskX'

const Login = (): JSX.Element  => {
  const history = useHistory()

  const goToPosts = () => {
    history.replace(AppRoutes.POSTS)
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) fetch(`${environment.apiBaseUrl}/employees/auth/token?jwt=${jwt}`)
      .then(() => goToPosts())
  }, [])

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const submitHandler = (): void => {
    fetch(`${environment.apiBaseUrl}/employees/auth/login`, {
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.token) {
          localStorage.setItem('token', data.token)
          goToPosts()
        } else {
          setError(data.message)
        }
      })
      .catch((err: Error) => {
        console.log(err)
        setError(err.message)
      })
  }

  return (
    <TruskX>
      <Form>
        <FieldsContainer>
          <Field>
            <Label>Adresse e-mail</Label>
            <Input
              id='email'
              onChange={emailHandler}
              placeholder='******@trusk.com'
              type='string'
              value={email}
            />
          </Field>
          <Field>
            <Label>Mot de passe</Label>
            <Input
              id='password'
              onChange={passwordHandler}
              placeholder='*********'
              type='password'
              value={password}
            />
          </Field>
        </FieldsContainer>
        <FormError error={error} />
        <Submit label='Connexion' onClick={submitHandler} />
      </Form>
    </TruskX>
  )
}

export default Login