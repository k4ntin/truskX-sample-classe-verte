import express, {Express} from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

const initGlobalAppMiddlewares = (app: Express): void => {
    app.use(compression())
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(helmet())
    app.use(bodyParser.urlencoded({ extended: true, limit: '25mb' }))
}

export default initGlobalAppMiddlewares