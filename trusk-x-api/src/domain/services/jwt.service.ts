import {sign, verify} from 'jsonwebtoken'

import {IEmployee} from '../entities/employee'
import environment from '../../environment'

const createEmployeeJwt = (employee: IEmployee): string => sign({
    name: employee.name,
    email: employee.email,
    password: employee.password,
}, environment.jwtSecret)

const decodeEmployeeJwt = (jwt: string): Promise<IEmployee> => {
    return new Promise((resolve, reject) => {
        verify(jwt, environment.jwtSecret, (err, decodedJwt) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(decodedJwt as IEmployee)
            }
        })
    })
}

const jwtService = {
    createEmployeeJwt,
    decodeEmployeeJwt
}

export default jwtService