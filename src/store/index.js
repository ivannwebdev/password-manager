import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import dataSlice from './slices/dataSlice'
import registrationSlice from './slices/registrationSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
    registration: registrationSlice
  }
})
