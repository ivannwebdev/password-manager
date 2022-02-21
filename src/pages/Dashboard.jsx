import React from 'react'
import AuthSelectors from 'store/selectors/authSelectors'
import { useSelector } from 'react-redux'
import { Layout, Modal, Row } from 'antd'
import { Navigate } from 'react-router-dom'
import DataSelectors from 'store/selectors/dataSelectors'
import { PasswordForm } from 'components/PasswordForm'
import { PasswordsList } from 'components/PasswordsList'
import { useActions } from 'hooks/useActions'

const Dashboard = () => {
  const name = useSelector(AuthSelectors.name)
  const auth = useSelector(AuthSelectors.auth)
  const modalVisible = useSelector(DataSelectors.modalVisible)
  const { setModalVisible } = useActions()

  if (!auth) return <Navigate to='/login' />

  return (
    <Layout>
      <Row
        justify='center'
        align='middle'
        style={{ position: 'relative', top: 50, height: 100 }}
      >
        <h2>HEllo {name}! You can manage your passwords here</h2>
      </Row>

      <PasswordsList />

      <Modal
        title='Add event'
        visible= {modalVisible}
        footer= {null}
        onCancel={() => setModalVisible(false)}
      >
        <PasswordForm />
      </Modal>
    </Layout>
  )
}

export { Dashboard }
