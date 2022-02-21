const name = state => state.auth.name
const password = state => state.auth.password
const auth = state => state.auth.auth
const error = state => state.auth.error
const loginName = state => state.auth.loginName
const loginPassword = state => state.auth.loginPassword

export default {
  name,
  password,
  auth,
  error,
  loginName,
  loginPassword
}
