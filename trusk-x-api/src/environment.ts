import dotenv from 'dotenv'

dotenv.config()

interface IEnvironment {
    jwtSecret: string
    mongooseConnectionString: string
    saltRounds: string
    serverHttpPort: string
    socketsBaseUrl: string
}

const environment: IEnvironment = {
    jwtSecret: process.env.JWT_SECRET as string,
    mongooseConnectionString: process.env.MONGOOSE_CONNECTION_STRING as string,
    saltRounds: process.env.SALT_ROUNDS as string,
    serverHttpPort: process.env.SERVER_HTTP_PORT as string,
    socketsBaseUrl: process.env.SOCKETS_BASE_URL as string,
}

export default environment