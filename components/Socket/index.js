import io from 'socket.io-client'

const socket = io.connect('http://192.168.1.239:3005/')

export { socket }
