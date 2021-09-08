import {IEmployee} from '../entities/employee'
import Employee from '../models/employee.model'

const createNewEmployee = (input: IEmployee): Promise<IEmployee> => {
    return new Promise((resolve, reject) => {
        const newEmployee = new Employee(input)
        newEmployee
            .save()
            .then(createdEmployee => resolve(createdEmployee))
            .catch((err: Error) => reject(err))
    })
}

const findAll = (): Promise<IEmployee[]> => {
    return new Promise((resolve, reject) => {
        Employee
            .find({})
            .exec()
            .then((result) => resolve(result))
            .catch((err: Error) => reject(err))
    })
}

const findEmployeeByDecodedJwt = (input: IEmployee): Promise<IEmployee> => {
    return new Promise((resolve, reject) => {
        Employee
            .findOne({
                name: input.name,
                email: input.email,
            })
            .exec()
            .then((result) => {
                if (result === null) reject(new Error('not_found'))
                else resolve(result)
            })
            .catch((err: Error) => reject(err))
    })
}

const findEmployeeByEmail = (input: string): Promise<IEmployee | null> => {
    return new Promise((resolve, reject) => {
        Employee
            .findOne({ email: input })
            .exec()
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

const findEmployeeById = (input: string): Promise<IEmployee> => {
    return new Promise((resolve, reject) => {
        Employee
            .findById(input)
            .exec()
            .then((result) => {
                if (result === null) reject(new Error('not_found'))
                else resolve(result)
            })
            .catch((err) => reject(err))
    })
}

const employeesService = {
    createNewEmployee,
    findAll,
    findEmployeeByDecodedJwt,
    findEmployeeByEmail,
    findEmployeeById
}

export default employeesService