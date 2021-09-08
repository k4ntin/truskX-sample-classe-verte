import {Document} from 'mongoose'

import {IEmployee} from './employee'

export interface IPost extends Document {
    title: string
    body: string
    author: IEmployee,
    createdAt: Date
}
