import { Layout, Row } from 'antd'
import { RegistrationForm } from 'components/RegistrationForm'
import React from 'react'

const Registration = () => {
  return (
    <Layout>
      <Row
        justify='center'
        align='middle'
        style={{ top: 170, position: 'relative' }}
      >
        <h2>Create your username and password</h2>
      </Row>

      <Row
        justify='center'
        align='middle'
        className='h100'
      >
        <RegistrationForm />
      </Row>
    </Layout>
  )
}

export { Registration }
