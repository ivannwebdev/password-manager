import { logined } from 'store/slices/authSlice'
import { setPasswords } from 'store/slices/dataSlice'
import { getCurrentUserName } from './currentUserName'

const userLogined = dispatch => {
  const currentUserName = getCurrentUserName()

  if (!currentUserName) return

  dispatch(logined(currentUserName))
  dispatch(setPasswords(currentUserName))

}

export { userLogined }
