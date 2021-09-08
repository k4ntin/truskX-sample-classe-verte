import {Express, Request, Response} from 'express'

import postsService from '../../../domain/services/posts.service'

const addGetPostDetails = (app: Express): void => {
    app.get('/posts/:postId', async (req: Request, res: Response) => {
        console.log('GET /posts/:postId')
        const input = req.params.postId
        const output = await postsService.findPostById(input)
        res.status(200).json(output)
    })
}

export default addGetPostDetails