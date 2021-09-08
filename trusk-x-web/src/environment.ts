interface IEnvironment {
  apiBaseUrl: string
  socketsBaseUrl: string
}

const environment: IEnvironment = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL as string,
  socketsBaseUrl: process.env.REACT_APP_SOCKETS_BASE_URL as string,
}

export default environment