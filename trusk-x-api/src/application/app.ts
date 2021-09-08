import express, {Express} from 'express'

import addUseCases from './useCases'
import initGlobalAppMiddlewares from './middlewares'

const app: Express = express()

initGlobalAppMiddlewares(app)
addUseCases(app)

export default app