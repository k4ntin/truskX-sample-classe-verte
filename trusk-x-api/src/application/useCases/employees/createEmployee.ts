import {Express, Request, Response} from 'express'

import employeesService from '../../../domain/services/employees.service'
import { IEmployee } from '../../../domain/entities/employee'
import regExs from '../../../domain/regExs'

const addCreateEmployee = (app: Express): void => {
    app.post('/employees', async (req: Request, res: Response) => {
        console.log('POST /employees')
        const { name } = req.body
        if (!name) {
            console.log('No name provided')
            return res.status(400).json({ message: 'Nom requis' })
        }
        else {
            console.log('Name provided')
            const { email } = req.body
            if (!email) {
                console.log('No email provided')
                return res.status(400).json({ message: 'Adresse e-mail requise' })
            }
            else {
                console.log('Email provided')
                const emailValid = regExs.email.test(email)
                if (!emailValid) {
                    console.log('Invalid email provided')
                    return res.status(400).json({ message: 'Adresse e-mail invalide' })
                } else {
                    const {phone} = req.body
                    if (!phone) {
                        console.log('No phone provided')
                        return res.status(400).json({ message: 'Téléphone requis' })
                    } else {
                        const { password } = req.body
                        if (!password) {
                            console.log('No password provided')
                            res.status(400).json({ message: 'Mot de passe requis' })
                        }
                        else {
                            console.log('Password provided')
                            employeesService.createNewEmployee({ name, email, phone, password } as IEmployee)
                                .then((output) => res.status(201).json(output))
                                .catch((output) => res.status(500).send(output))
                        }
                    }
                }
            }
        }
    })
}

export default addCreateEmployee