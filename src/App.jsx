import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Login />
    </>
  )
}

export default App
