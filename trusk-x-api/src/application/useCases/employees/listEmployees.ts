import {Express, Request, Response} from 'express'

import employeesService from '../../../domain/services/employees.service'

const addListEmployees = (app: Express): void => {
    app.get('/employees', async (req: Request, res: Response) => {
        console.log('GET /employees')
        const output = await employeesService.findAll()
        res.status(200).json(output)
    })
}

export default addListEmployees