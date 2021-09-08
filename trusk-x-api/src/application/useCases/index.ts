import {Express} from 'express'

import addEmployeesUseCases from './employees'
import addPostsUseCases from './posts'

const addUseCases = (app: Express): void => {
    addEmployeesUseCases(app)
    addPostsUseCases(app)
}

export default addUseCases