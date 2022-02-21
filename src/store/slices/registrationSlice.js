import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'
import { addUser } from 'operations/addUser'

const initialState = {
  name: '',
  password: '',
  error: ''
}

const registrationSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setRegistrationName: (state, action) => {
      state.name = action.payload
    },
    setRegistrationPassword: (state, action) => {
      state.password = action.payload
    },
    createUser: (state) => {
      if (!state.name || !state.password) {
        state.error = 'All fields must be filled'
        message.error('All fields must be filled')

        return
      }

      const isUserAdded = addUser(state.name, state.password)

      if (!isUserAdded) {
        state.error = 'User already exists'
        message.error('User already exists')

        return
      }

      state.error = ''
      state.name = ''
      state.password = ''
      message.success('User was successfully created. Now you can login')
    }
  }
})

export const {
  setRegistrationName,
  setRegistrationPassword,
  createUser
} = registrationSlice.actions

export default registrationSlice.reducer
