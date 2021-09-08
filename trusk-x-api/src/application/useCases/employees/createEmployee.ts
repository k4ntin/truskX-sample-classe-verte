import {Express, Request, Response} from 'express'

import employeesService from '../../../domain/services/employees.service'
import { IEmployee } from '../../../domain/entities/employee'

const addCreateEmployee = (app: Express): void => {
    app.post('/employees', async (req: Request, res: Response) => {
        console.log('POST /employees')
        const { name } = req.body
        if (!name) {
            console.log('No name provided')
            return res.status(400).json({ message: 'name required' })
        }
        else {
            console.log('Name provided')
            const { email } = req.body
            if (!email) {
                console.log('No email provided')
                return res.status(400).json({ message: 'email required' })
            }
            else {
                console.log('Email provided')
                const { password } = req.body
                if (!password) {
                    console.log('No password provided')
                    return res.status(400).json({ message: 'password required' })
                }
                else {
                    console.log('Password provided')
                    employeesService.createNewEmployee({ name, email, password } as IEmployee)
                        .then((output) => res.status(201).json(output))
                        .catch((output) => res.status(500).send(output))
                }
            }
        }
    })
}

export default addCreateEmployee