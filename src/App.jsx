import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutPublic from './components/layout/LayoutPublic'
import LayoutPrivate from './components/layout/LayoutPrivate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<LayoutPublic />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path='/dashboard' element={<LayoutPrivate/>}>
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>




    </>
  )
}

export default App
