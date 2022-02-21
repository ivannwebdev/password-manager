import { getCurrentUserName } from './currentUserName'
import { getUsers } from './users'

const changePassword = (fieldName, password) => {
  const currentUserName = getCurrentUserName()
  const users = getUsers()
  const currentUser = users[currentUserName]

  if (fieldName === 'Password manager') {
    currentUser.password = password
    currentUser.passwords[0].password = password
  } else {
    currentUser.passwords.forEach(pass => {
      if (pass.event === fieldName) pass.password = password
    })
  }

  users[currentUserName] = currentUser
  localStorage.setItem('users', JSON.stringify(users))

  return currentUser.passwords
}

export { changePassword }
