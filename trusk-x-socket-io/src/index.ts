import { createServer } from 'http'
import { Server } from 'socket.io'

import addUseCases from './application/useCases'
import environment from './environment'

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
})

io.on('connection', (socket) => {
    addUseCases(socket)
})

httpServer.listen(environment.serverHttpPort, () => {
    console.log('Server started')
})