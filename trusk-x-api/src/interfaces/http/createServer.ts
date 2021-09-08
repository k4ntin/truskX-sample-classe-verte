import {Express} from 'express'
import * as http from 'http'

const createServer = (app: Express): http.Server => {
    return http.createServer(app)
}

export default createServer