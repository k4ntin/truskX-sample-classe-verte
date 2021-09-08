import {Express, Request, Response} from 'express'
import jwtService from '../../../../domain/services/jwt.service'
import employeesService from '../../../../domain/services/employees.service'

const addGetTokenInfo = (app: Express): void => {
    app.get('/employees/auth/token', async (req: Request, res: Response): Promise<Response> => {
        console.log('GET /employees/auth/token')
        const input = req.query
        const jwt = input.jwt as string
        if (!jwt) {
            console.log('No jwt param provided')
            return res.status(400).json({ message: 'jwt required' })
        } else {
            console.log('jwt param provided')
            try {
                const decodedJwt = await jwtService.decodeEmployeeJwt(jwt)
                const output = await employeesService.findEmployeeByDecodedJwt(decodedJwt)
                return res.status(200).json(output)
            } catch (e) {
                return res.status(500).json(e)
            }
        }
    })
}

export default addGetTokenInfo