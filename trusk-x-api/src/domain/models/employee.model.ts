import { model } from 'mongoose'

import {IEmployee} from '../entities/employee'
import EmployeeSchema from '../schemas/employee.schema'

const Employee = model<IEmployee>(
    'Employee',
    EmployeeSchema
)

export default Employee