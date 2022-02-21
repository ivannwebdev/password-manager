import { Layout, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import authSelectors from 'store/selectors/authSelectors'
import { useActions } from './../hooks/useActions';

const Navbar = () => {
  const name = useSelector(authSelectors.name)
  const auth = useSelector(authSelectors.auth)
  const { logout } = useActions()

  return (
    <Layout.Header>
      <Row justify= 'end'>
          {auth ?
          <>
            <div style={{ color: 'white', fontSize: 18 }}>{name}</div>

            <NavLink
              onClick={() => logout()}
              to='/login'
              style={{ marginLeft: 30, color: 'white' }}
            >
              Logout
            </NavLink>
          </>
          :
          <>
            <NavLink
              to='/login'
              style={{ color: 'white' }}
            >
              Login
            </NavLink>
            <NavLink
              to='/registration'
              style={{ marginLeft: 30, color: 'white' }}
            >
              Sign up
            </NavLink>
          </>
          }
      </Row>
    </Layout.Header>
  )
}

export { Navbar }
