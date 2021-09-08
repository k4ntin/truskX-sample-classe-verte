import {Express, Request, Response} from 'express'

import postsService from '../../../domain/services/posts.service'

const addListPosts = (app: Express): void => {
    app.get('/posts', async (req: Request, res: Response) => {
        console.log('GET /posts')
        const output = await postsService.findAll()
        res.status(200).json(output)
    })
}

export default addListPosts