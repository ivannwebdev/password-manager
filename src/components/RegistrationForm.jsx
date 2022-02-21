import { Button, Form, Input } from 'antd'
import { useActions } from 'hooks/useActions'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import registrationSelectors from 'store/selectors/registrationSelectors'

const RegistrationForm = () => {
  const { setRegistrationName, setRegistrationPassword, createUser } = useActions()
  const name = useSelector(registrationSelectors.name)
  const password = useSelector(registrationSelectors.password)
  const error = useSelector(registrationSelectors.error)

  return (
    <Form>
      {error && <div style={{ color: 'red', fontSize: 15, marginLeft: 50 }}>{error}</div>}

      <Form.Item label='Name'>
        <Input
          placeholder='Enter your name'
          value={name}
          onChange={e => setRegistrationName(e.target.value)}
        />
      </Form.Item>

      <Form.Item label='Password'>
        <Input.Password
          placeholder='Create your password'
          value={password}
          onChange={e => setRegistrationPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          onClick={() => createUser()}
          type="primary"
        >
          Sign up
        </Button>

        <Link
          style={{ marginLeft: 20 }}
          to='/login'
        >
          login
        </Link>
      </Form.Item>
    </Form>
  )
}

export { RegistrationForm }
