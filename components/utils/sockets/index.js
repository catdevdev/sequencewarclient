/* imports */
import { useEffect } from 'react'
import { socket } from '../../Socket'
import { useRouter } from 'next/router'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import { writeRooms, addRoom, removeRoom } from '../../../redux/actions/Rooms'
import { onMessages, addMessage } from '../../../redux/actions/Chat'
import { onUser } from '../../../redux/actions/InputName'
import {
  hideModalInputUser,
  showModalAlert,
} from '../../../redux/actions/Modals'
import { onUsers } from '../../../redux/actions/Users'
import {
  setYouIsCreatorRoom,
  writeRoomId,
  setCurrentRoom,
  setYouIsVisitor,
  setUsersCurrentRoom,
  addUserCurrentRoom,
  removeUserCurrentRoom,
  resetCurrentRoom,
} from '../../../redux/actions/Room'

const SocketCalls = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    socket.on('user', (user) => {
      dispatch(onUser(user))
      dispatch(hideModalInputUser())
    })
    socket.on('users', (users) => {
      dispatch(onUsers(users))
    })
    socket.on('message', (message) => {
      dispatch(addMessage(message))
    })
    socket.on('rooms', (rooms) => {
      dispatch(writeRooms(rooms))
    })
    socket.on('addedRoom', (room) => {
      dispatch(addRoom(room))
    })
    socket.on('removeRoom', (id) => {
      dispatch(removeRoom(id))
    })
    socket.on('createdRoom', (id) => {
      dispatch(writeRoomId(id))
      dispatch(setYouIsCreatorRoom())
      router.push('/lobby')
    })
    socket.on('confirmJoinRoom', (room) => {
      dispatch(setCurrentRoom(room))
      dispatch(setUsersCurrentRoom(room.users))
      console.log(room)
      dispatch(setYouIsVisitor())
      router.push('/lobby')
    })
    socket.on('addUserInRoom', (user) => {
      dispatch(addUserCurrentRoom(user))
    })
    socket.on('leaveYourselfFromRoom', () => {
      dispatch(resetCurrentRoom())
      router.push('/')
    })
    socket.on('leaveUserFromRoom', (userId) => {
      dispatch(removeUserCurrentRoom(userId))
      console.log(userId)
    })
    socket.on('destroyRoom', () => {
      router.push('/')
      dispatch(showModalAlert('You destroyed room'))
      dispatch(resetCurrentRoom())
    })
    socket.on('leaveFromDestroyRoom', () => {
      router.push('/')
      dispatch(showModalAlert('Room destroyed'))
      dispatch(resetCurrentRoom())
    })
    socket.on('showAlert', (text) => {
      dispatch(showModalAlert(text))
    })

    // export function addUserCurrentRoom(user) {
    //   return {
    //     type: ADD_USER_CURRENT_ROOM,
    //     payload: user,
    //   };
    // }

    // export function removeUserCurrentRoom(id) {
    //   return {
    //     type: REMOVE_USER_CURRENT_ROOM,
    //     payload: id,
    //   };
    // }
  }, [])
  return null
}

export { SocketCalls }
