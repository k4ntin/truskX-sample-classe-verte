import {Express, Request, Response} from 'express'

import employeesService from '../../../domain/services/employees.service'

const addGetEmployeeDetails = (app: Express): void => {
    app.get('/employees/:employeeId', async (req: Request, res: Response) => {
        console.log('GET /employees/:employeeId')
        const input = req.params.employeeId
        const output = await employeesService.findEmployeeById(input)
        res.status(200).json(output)
    })
}

export default addGetEmployeeDetails