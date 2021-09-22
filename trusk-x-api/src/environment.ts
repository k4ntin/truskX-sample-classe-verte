// import dotenv from 'dotenv'
//
// dotenv.config()

interface IEnvironment {
    jwtSecret: string
    mongooseConnectionString: string
    saltRounds: string
    serverHttpPort: string
    socketsBaseUrl: string
}

const environment: IEnvironment = {
    jwtSecret: '8nkhJN&L0#*h',
    mongooseConnectionString: 'mongodb://localhost:27017/truskx',
    saltRounds: '8',
    serverHttpPort: '5000',
    socketsBaseUrl: 'http://localhost:5055',
}

export default environment
