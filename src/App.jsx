import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </>
  )
}

export default App
