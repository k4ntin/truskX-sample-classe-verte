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
import Button from '../components/Button'

const Signup = (): JSX.Element  => {
  const history = useHistory()

  const goToLogin = () => {
    history.replace(AppRoutes.LOGIN)
  }

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
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const nameHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const submitHandler = (): void => {
    fetch(`${environment.apiBaseUrl}/employees`, {
      body: JSON.stringify({
        name,
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
      .then((response) => {
        if (response.status === 201)
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
              setError(err.message)
            })
        else {
          response.json().then((data) => setError(data.code ? 'Adresse e-mail déjà enregistrée' : data.message))
        }
      })
      .catch((err: Error) => {
        setError(err.message)
      })
  }

  return (
    <TruskX>
      <Form>
        <FieldsContainer>
          <Field>
            <Label>Nom</Label>
            <Input
              id='name'
              onChange={nameHandler}
              placeholder='Adrian'
              type='string'
              value={name}
            />
          </Field>
          <Field>
            <Label>Adresse e-mail</Label>
            <Input
              id='email'
              onChange={emailHandler}
              placeholder='adrian@trusk.com'
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
        <Submit label='Inscription' onClick={submitHandler} />
        <Button id='login' label='Connexion' onClick={goToLogin} />
      </Form>
    </TruskX>
  )
}

export default Signup