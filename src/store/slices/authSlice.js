import { createSlice } from '@reduxjs/toolkit'
import { removeCurrentUserName, setCurrentUserName } from 'operations/currentUserName'
import { getUsers } from 'operations/users'

const initialState = {
  name: null,
  auth: false,
  error: '',
  loginName: '',
  loginPassword: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginName: (state, action) => {
      state.loginName = action.payload
    },
    setLoginPassword: (state, action) => {
      state.loginPassword = action.payload
    },
    login: (state) => {
      const users = getUsers()
      const isAuth = users[state.loginName]?.password === state.loginPassword

      if (isAuth) {
        setCurrentUserName(state.loginName)
        state.auth = true
        state.name = state.loginName
        state.error = ''
        state.loginName = ''
        state.loginPassword = ''
      } else {
        state.error = 'Wrong username or password'
      }

    },
    logout: (state) => {
      state.auth = false
      removeCurrentUserName()
    },
    logined: (state, action) => {
      const currentUserName = action.payload

      state.name = currentUserName
      state.auth = true
    }
  }
})

export const {
  setLoginName,
  setLoginPassword,
  login,
  logout,
  logined
} = authSlice.actions

export default authSlice.reducer
