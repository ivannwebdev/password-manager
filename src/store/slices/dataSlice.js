import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'
import { changePassword } from 'operations/changePassword'
import { createEvent } from 'operations/createEvent'
import { removeEvent } from 'operations/removeEvent'
import { getUsers } from 'operations/users'

const initialState = {
  passwords: [],
  name: '',
  password: '',
  error: '',
  modalVisible: false
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPasswords: (state, action) => {
      const username = action.payload
      const users = getUsers()
      const passwords = users[username].passwords
      state.passwords = passwords
    },
    setEventName: (state, action) => {
      state.name = action.payload
    },
    setEventPassword: (state, action) => {
      state.password = action.payload
    },
    setModalVisible: (state, action) => {
      state.modalVisible = action.payload
    },
    createPassword: (state) => {
      const { error, updatedPasswords } = createEvent(state.name, state.password)

      if (error) {
        state.error = error
        state.name = ''

        return
      }

      state.name = ''
      state.password = ''
      state.error = ''
      state.modalVisible = false
      state.passwords = updatedPasswords
      message.success('Password was successfully created')
    },
    updatePassword: (state, action) => {
      const { name, password } = action.payload

      if (!password) {
        message.error('Password cannot be empty')

        return
      }
      const currentPasswords = changePassword(name, password)

      state.passwords = currentPasswords
      message.success('Password was successfully updated')
    },
    setPassword: (state, action) => {
      state.passwords.forEach(pass => {
        if (pass.event === action.payload.name) pass.password = action.payload.password
      })
    },
    removePassword: (state, action) => {
      const updatedPasswords = removeEvent(action.payload)
      state.passwords = updatedPasswords
    }
  }
})

export const {
  setPasswords,
  setEventName,
  setEventPassword,
  setModalVisible,
  createPassword,
  updatePassword,
  setPassword,
  removePassword
} = dataSlice.actions

export default dataSlice.reducer
