import { login } from 'store/slices/authSlice'
import { setPasswords } from 'store/slices/dataSlice'

const userLogin = (dispatch, username) => {
  dispatch(login())
  dispatch(setPasswords(username))
}

export { userLogin }
