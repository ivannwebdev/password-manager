import storageKeys from "constants/storageKeys"

const getCurrentUserName = () => {
  const currentUserName = JSON.parse(localStorage.getItem(storageKeys.CURRENT_USERNAME))

  return currentUserName
}

const removeCurrentUserName = () => {
  localStorage.removeItem(storageKeys.CURRENT_USERNAME)
}

const setCurrentUserName = (user) => {
  localStorage.setItem(storageKeys.CURRENT_USERNAME, JSON.stringify(user))
}

export { getCurrentUserName, removeCurrentUserName, setCurrentUserName }
