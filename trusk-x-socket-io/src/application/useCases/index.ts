import {Socket} from 'socket.io'

import addPostsUseCases from './posts'

const addUseCases = (socket: Socket): void => {
    addPostsUseCases(socket)
}

export default addUseCases