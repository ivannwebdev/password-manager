import storageKeys from 'constants/storageKeys'

const getUsers = () => {
  const users = JSON.parse(localStorage.getItem(storageKeys.USERS)) || {}

  return users
}

export { getUsers }
