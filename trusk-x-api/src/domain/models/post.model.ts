import { model } from 'mongoose'

import {IPost} from '../entities/post'
import PostSchema from '../schemas/post.schema'

const Post = model<IPost>(
    'Post',
    PostSchema
)

export default Post