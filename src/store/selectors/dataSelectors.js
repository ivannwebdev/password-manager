const passwords = state => state.data.passwords
const name = state => state.data.name
const password = state => state.data.password
const error = state => state.data.error
const modalVisible = state => state.data.modalVisible

export default {
  passwords,
  name,
  password,
  error,
  modalVisible
}
