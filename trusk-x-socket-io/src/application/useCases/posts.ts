import {Socket} from 'socket.io'

const addPostsUseCases = (socket: Socket): void => {
    socket.on('post_create-success', () => {
        console.log('Received: post_create-success')
        socket.broadcast.emit('post_refresh-many')
        console.log('Emitted: post_refresh-many')
    })
}

export default addPostsUseCases