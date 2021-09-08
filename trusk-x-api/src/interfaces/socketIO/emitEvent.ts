import {io} from 'socket.io-client'

import environment from '../../environment'

const emitEvent = (eventName: string): void => {
    const socket = io(environment.socketsBaseUrl)
    console.log('Emitting event to socket.io:', eventName)
    socket.emit(eventName)
}

export default emitEvent