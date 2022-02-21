import { getUsers } from './users'
import { getCurrentUserName } from 'operations/currentUserName'
import storageKeys from 'constants/storageKeys'

const removeEvent = (fieldName) => {
  const users = getUsers()
  const currentUserName = getCurrentUserName()
  const updatedPasswords = users[currentUserName].passwords.filter(pass => pass.event !== fieldName)
  const updatedUsers = JSON.stringify({ ...users, [currentUserName]: { ...users[currentUserName], passwords: updatedPasswords } })
  localStorage.setItem(storageKeys.USERS, updatedUsers)

  return updatedPasswords
}

export { removeEvent }
