import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import authSelectors from 'store/selectors/authSelectors'
import { useActions } from './../hooks/useActions'
import { userLogin } from 'operations/userLogin'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { setLoginPassword, setLoginName } = useActions()
  const error = useSelector(authSelectors.error)
  const loginName = useSelector(authSelectors.loginName)
  const loginPassword = useSelector(authSelectors.loginPassword)

  return (
    <Form>
      {error && <div style={{ color: 'red', fontSize: 15, marginLeft: 50}}>{error}</div>}

      <Form.Item label='Name'>
        <Input
          value={loginName}
          onChange={e => setLoginName(e.target.value)}
          placeholder='Name'
        />
      </Form.Item>

      <Form.Item label='Password'>
        <Input.Password
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          onClick={() => userLogin(dispatch, loginName)}
          type="primary"
        >
          Login
        </Button>

        <Link
          style={{ marginLeft: 20 }}
          to='/registration'
        >
          sign up
        </Link>
      </Form.Item>
    </Form>
  )
}

export { LoginForm }
