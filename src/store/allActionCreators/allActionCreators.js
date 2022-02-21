
import { setLoginName, setLoginPassword, login, logout, logined } from 'store/slices/authSlice'
import { setPasswords, setEventName, setEventPassword, setModalVisible, createPassword, updatePassword, setPassword, removePassword } from 'store/slices/dataSlice'
import { setRegistrationName, setRegistrationPassword, createUser } from 'store/slices/registrationSlice'

export default {
  setLoginName,
  setLoginPassword,
  login,
  logout,
  logined,
  setPasswords,
  setEventName,
  setEventPassword,
  setModalVisible,
  createPassword,
  updatePassword,
  setPassword,
  removePassword,
  setRegistrationName,
  setRegistrationPassword,
  createUser
}
