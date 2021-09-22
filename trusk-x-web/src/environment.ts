interface IEnvironment {
  apiBaseUrl: string
  socketsBaseUrl: string
}

const environment: IEnvironment = {
  apiBaseUrl: 'http://localhost:5000',
  socketsBaseUrl: 'http://localhost:5055',
}

export default environment
