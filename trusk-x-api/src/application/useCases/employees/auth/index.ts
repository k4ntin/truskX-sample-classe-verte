import {Express} from 'express'

import addGetTokenInfo from './getTokenInfo'
import addLoginEmployee from './loginEmployee'

const addEmployeesAuthenticationUseCases = (app: Express): void => {
    addGetTokenInfo(app)
    addLoginEmployee(app)
}

export default addEmployeesAuthenticationUseCases