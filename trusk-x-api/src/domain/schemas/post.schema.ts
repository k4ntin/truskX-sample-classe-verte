import {Schema, Types} from 'mongoose'

const PostSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: Types.ObjectId, ref: 'Employee'}
},{
    timestamps: true
})

export default PostSchema