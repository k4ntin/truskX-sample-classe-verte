import dotenv from 'dotenv'

dotenv.config()

interface IEnvironment {
    serverHttpPort: string
}

const environment: IEnvironment = {
    serverHttpPort: process.env.SERVER_HTTP_PORT as string,
}

export default environment