import app from './application/app'
import createServer from './interfaces/http/createServer'
import environment from './environment'
import initMongooseConnection from './interfaces/databases/mongodb/initMongooseConnection'

const port: string = environment.serverHttpPort

initMongooseConnection().then(() => {
    createServer(app).listen(port, () => {
        console.log('Employees API Server is listening on', port)
    })
})