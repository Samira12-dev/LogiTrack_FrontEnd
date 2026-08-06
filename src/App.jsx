import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LayoutPublic from './components/layout/LayoutPublic'
import LayoutPrivate from './components/layout/LayoutPrivate'
import NotFound from './pages/NotFound'
import AccessDenied from './pages/AccessDenied'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Clients from './pages/Clients'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Users from './pages/Users'
import ClientsForm from './components/clients/ClientsForm'
import ProductForm from './components/products/ProductsForm'
import OrdersForm from './components/orders/OrdersForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<LayoutPublic />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/access-denied' element={<AccessDenied />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<LayoutPrivate />}>
            <Route index element={<Dashboard />} />
            <Route path='clients' element={<Clients />} />
            <Route path='clients/ajouter-client' element={<ClientsForm/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='products/ajouter-product' element={<ProductForm/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='orders/ajouter-order' element={<OrdersForm/>}/>
          </Route>

        </Route>



      </Routes>







    </>
  )
}

export default App
