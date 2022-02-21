import { Button, Input, List, Popconfirm, Row } from 'antd'
import { useActions } from 'hooks/useActions'
import React from 'react'
import { useSelector } from 'react-redux'
import dataSelectors from 'store/selectors/dataSelectors'

const PasswordsList = () => {
  const { updatePassword, setPassword, setModalVisible, removePassword } = useActions()
  const passwords = useSelector(dataSelectors.passwords)

  return (
    <Row
      justify='center'
      align='top'
      className='h100'
      style={{ marginTop: 50 }}
    >
      <List>
        {
        passwords.map(pass =>
          <List.Item
            key={pass.event}
            style={(pass.event === 'Password manager') ? { fontWeight: '500' } : {}}
          >
            <Row style={{ marginRight: 10, width: 200, fontSize: 15 }}>
              {pass.event}:
            </Row>

            <Row>
              <Input.Password
                value={pass.password}
                onChange={e => setPassword({ password: e.target.value, name: pass.event })}
              />
            </Row>

            <Row style={{marginLeft: 15}}>
              <Button
                type='primary'
                onClick={() => updatePassword({ name: pass.event, password: pass.password })}
              >
                Edit
              </Button>
            </Row>

            <Row style={{ marginLeft: 15, visibility: (pass.event === 'Password manager') ? 'hidden' : 'initial' }}>
              <Popconfirm
                title='Are you sure you want to delete?'
                onConfirm={() => removePassword(pass.event)}
                okText='Yes'
                cancelText='No'
              >
                <Button
                  type='primary'
                  danger
                  style={{ width: 70, height: 30 }}
                >
                  Delete
                </Button>
              </Popconfirm>
            </Row>
          </List.Item>
        )
        }

        <Button
          onClick={() => setModalVisible(true)}
          style={{ fontSize: 16, marginTop: 30, marginLeft: 250, backgroundColor: 'darkcyan', color: 'white', width: 100, height: 37, borderRadius: 5 }}>
          Add
        </Button>
      </List>
    </Row>
  )
}

export { PasswordsList }
