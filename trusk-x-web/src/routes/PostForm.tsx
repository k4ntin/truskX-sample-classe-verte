import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import AppRoutes from './routes'
import environment from '../environment'
import { IEmployee } from '../domain/employee'

import Field from '../components/Field'
import FieldsContainer from '../components/FieldsContainer'
import Form from '../components/Form'
import FormError from '../components/FormError'
import Input from '../components/Input'
import Label from '../components/Label'
import Submit from '../components/Submit'
import TruskX from '../components/TruskX'
import LogoutBtn from '../components/LogoutBtn'
import Textarea from '../components/Textarea'
import Button from '../components/Button'

const PostForm = (): JSX.Element  => {
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
      .then((response) => response.json())
      .then((data) => setAuthor(data))
      .catch(() => goToLogin())
  }, [])

  const [author, setAuthor] = useState<IEmployee | null>(null)
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const titleHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const bodyHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(event.target.value)
  }

  const submitHandler = (): void => {
    if (author) fetch(`${environment.apiBaseUrl}/posts`, {
      body: JSON.stringify({
        author: author._id,
        title,
        body
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
        if (data.title) goToPosts()
        else setError(data.message)
      })
      .catch((err: Error) => setError(err.message))
  }

  return (
    <TruskX>
      <Form>
        <FieldsContainer>
          <Field>
            <Label>Titre</Label>
            <Input
              id='title'
              onChange={titleHandler}
              placeholder='Le titre de votre article'
              type='string'
              value={title}
            />
          </Field>
          <Field>
            <Label>Contenu</Label>
            <Textarea
              id='body'
              onChange={bodyHandler}
              value={body}
            />
          </Field>
        </FieldsContainer>
        <FormError error={error} />
        <Submit label='Envoyer' onClick={submitHandler} />
        <Button id='cancel' label='Annuler' onClick={goToPosts} />
      </Form>
      <LogoutBtn />
    </TruskX>
  )
}

export default PostForm