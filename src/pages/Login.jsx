import { Layout, Row } from 'antd'
import { LoginForm } from 'components/LoginForm'
import { userLogined } from 'operations/userLogined'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AuthSelectors from 'store/selectors/authSelectors'

const Login = () => {
  const auth = useSelector(AuthSelectors.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    userLogined(dispatch)
  }, [])

  if (auth) return <Navigate to='/' />

  return (
    <Layout>
      <Row
        justify='center'
        align='middle'
        style={{ top: 170, position: 'relative' }}
      >
        <h2>LOGIN</h2>
      </Row>

      <Row
        justify='center'
        align='middle'
        className='h100'
      >
        <LoginForm />
      </Row>
    </Layout>
  )
}

export { Login }
