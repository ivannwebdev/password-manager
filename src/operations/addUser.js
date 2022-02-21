import { getUsers } from './users'

const addUser = (name, password) => {
  const users = getUsers() || {}
  const isUserExist = Object.keys(users)?.some(user => user === name)

  if (isUserExist) return false

  const passwordManager = 'Password manager'

  localStorage.setItem('users', JSON.stringify({
    ...users,
    [name]: {
      password,
      passwords: [{ event: passwordManager, password}]
    }
  }))

  return true
}


export { addUser }
