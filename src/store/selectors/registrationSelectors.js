const name = state => state.registration.name
const password = state => state.registration.password
const error = state => state.registration.error

export default {
  name,
  password,
  error
}
