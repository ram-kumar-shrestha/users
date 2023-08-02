import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/Dashboard'
import Users from './pages/users'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/all-users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App