import storageKeys from 'constants/storageKeys'
import { getCurrentUserName } from './currentUserName'
import { getUsers } from './users'

const createEvent = (name, password) => {
  let updatedPasswords
  let error = ''

  if (!name) {
    error = 'Enter event name'

    return { error, updatedPasswords }
  }

  if (!password) {
    error = 'Enter password'

    return { error, updatedPasswords }
  }

  const users = getUsers()
  const currentUserName = getCurrentUserName()
  const eventExists = users[currentUserName].passwords.find(pass => pass.event === name)

  if (eventExists) {
    error = 'Event already exists'

    return { error, updatedPasswords }
  }

  users[currentUserName].passwords = [...users[currentUserName].passwords, { event: name, password }]
  updatedPasswords = users[currentUserName].passwords
  localStorage.setItem(storageKeys.USERS, JSON.stringify(users))

  return {
    updatedPasswords,
    error
  }
}

export { createEvent }
