import {Express} from 'express'

import addCreatePost from './createPost'
import addGetPostDetails from './getPostDetails'
import addListPosts from './listPosts'

const addPostsUseCases = (app: Express): void => {
    addCreatePost(app)
    addGetPostDetails(app)
    addListPosts(app)
}

export default addPostsUseCases