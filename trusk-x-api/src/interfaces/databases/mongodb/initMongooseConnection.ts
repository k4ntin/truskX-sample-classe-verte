import { connect, Mongoose } from 'mongoose'
import environment from '../../../environment'

const initMongooseConnection = (): Promise<Mongoose> => {
    return connect(
        environment.mongooseConnectionString,
        {}
    )
}

export default initMongooseConnection