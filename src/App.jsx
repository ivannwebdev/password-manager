import { Dashboard } from 'pages/Dashboard'
import { Login } from 'pages/Login'
import { Registration } from 'pages/Registration'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'App.css'
import { Layout } from 'antd'
import { Navbar } from 'components/Navbar'

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />}/>
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default App
