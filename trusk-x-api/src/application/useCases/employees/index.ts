import {Express} from 'express'

import addCreateEmployee from './createEmployee'
import addEmployeesAuthenticationUseCases from './auth'
import addGetEmployeeDetails from './getEmployeeDetails'
import addListEmployees from './listEmployees'

const addEmployeesUseCases = (app: Express): void => {
    addCreateEmployee(app)
    addEmployeesAuthenticationUseCases(app)
    addGetEmployeeDetails(app)
    addListEmployees(app)
}

export default addEmployeesUseCases