import { Button, Form, Input, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import dataSelectors from 'store/selectors/dataSelectors'
import { useActions } from 'hooks/useActions'

const PasswordForm = () => {
  const name = useSelector(dataSelectors.name)
  const password = useSelector(dataSelectors.password)
  const error = useSelector(dataSelectors.error)
  const { setEventName, setEventPassword, createPassword } = useActions()

  return (
    <Form>
      {error && <div style={{ color: 'red', fontSize: 15, marginLeft: 170, marginBottom: 10 }}>{error}!</div>}

      <Form.Item
        label="Event name"
        name="name"
      >
        <Input
          value={name}
          onChange={e => setEventName(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
      >
        <Input.Password
          value={password}
          onChange={e => setEventPassword(e.target.value)}
        />
      </Form.Item>

      <Row justify= 'end'>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            onClick={() => createPassword()}
            style={{ marginRight: 40 }}
            type="primary"
          >
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export { PasswordForm }
