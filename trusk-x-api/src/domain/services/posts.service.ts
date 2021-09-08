import {IPost} from '../entities/post'
import Post from '../models/post.model'

const createNewPost = (input: IPost): Promise<IPost> => {
    return new Promise((resolve, reject) => {
        const newPost = new Post(input)
        newPost
            .save()
            .then(createdPost => resolve(createdPost))
            .catch((err: Error) => reject(err))
    })
}

const findAll = (): Promise<IPost[]> => {
    return new Promise((resolve, reject) => {
        Post
            .find({})
            .populate('author')
            .exec()
            .then((result) => resolve(result))
            .catch((err: Error) => reject(err))
    })
}

const findPostById = (input: string): Promise<IPost> => {
    return new Promise((resolve, reject) => {
        Post
            .findById(input)
            .populate('author')
            .exec()
            .then((result) => {
                if (result === null) reject(new Error('not_found'))
                else resolve(result)
            })
            .catch((err) => reject(err))
    })
}

const postsService = {
    createNewPost,
    findAll,
    findPostById
}

export default postsService