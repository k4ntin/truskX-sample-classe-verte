import { Express, Request, Response } from 'express'

import employeesService from '../../../../domain/services/employees.service'
import jwtService from '../../../../domain/services/jwt.service'
import regExs from '../../../../domain/regExs'

const addLoginEmployee = (app: Express): void => {
    app.post('/employees/auth/login', async (req: Request, res: Response) => {
        console.log('POST /employees/auth/login')
        const { email } = req.body
        if (!email) {
            console.log('No email provided')
            return res.status(400).json({ message: 'email required' })
        } else {
            const emailValid = regExs.email.test(email)
            if (!emailValid) {
                console.log('Invalid email provided')
                return res.status(400).json({ message: 'invalid email' })
            }
            else {
                console.log('Email provided')
                const employee = await employeesService.findEmployeeByEmail(email)
                if (!employee) {
                    console.log('Employee not found')
                    return res.status(404).json({message: 'Adresse e-mail non enregistrée'})
                }
                else {
                    console.log('Employee found')
                    const { password } = req.body
                    if (!password) {
                        console.log('No password provided')
                        res.status(400).json({ message: 'password required' })
                    } else {
                        console.log('Password provided')
                        if (employee.password === password) {
                            console.log('Password is ok')
                            const token = jwtService.createEmployeeJwt(employee)
                            return res.status(200).json({
                                employee,
                                token
                            })
                        } else {
                            console.log('Password is not ok')
                            return res.status(404).json({message: 'Mauvais mot de passe'})
                        }
                    }
                }
            }
        }
    })
}

export default addLoginEmployee