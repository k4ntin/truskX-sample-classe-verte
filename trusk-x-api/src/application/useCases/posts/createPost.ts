import {Express, Request, Response} from 'express'

import postsService from '../../../domain/services/posts.service'
import emitEvent from '../../../interfaces/socketIO/emitEvent'
import { IPost } from '../../../domain/entities/post'

const addCreatePost = (app: Express): void => {
    app.post('/posts', async (req: Request, res: Response) => {
        console.log('POST /posts')
        const { title } = req.body
        if (!title) {
            console.log('No title provided')
            return res.status(400).json({ message: 'Titre requis' })
        }
        else {
            console.log('Title provided')
            const { body } = req.body
            if (!body) {
                console.log('No body provided')
                return res.status(400).json({ message: 'Contenu requis' })
            }
            else {
                console.log('Body provided')
                const { author } = req.body
                if (!author) {
                    console.log('No author provided')
                    return res.status(400).json({ message: 'author required' })
                }
                else {
                    console.log('Author provided')
                    postsService.createNewPost({  title, body, author } as IPost)
                        .then((output) => {
                            emitEvent('post_create-success')
                            res.status(201).json(output)
                        })
                        .catch((output) => res.status(500).send(output))
                }
            }
        }
    })
}

export default addCreatePost