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
import UserForm from './components/users/UserForm'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import RoleGuard from './components/auth/RoleGuard'
import ProductDetails from './components/products/ProductsDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={<LayoutPublic />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/access-denied' element={<AccessDenied />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<LayoutPrivate />}>
            <Route index element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <Dashboard />
              </RoleGuard>} />
            <Route path='clients' element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <Clients />
              </RoleGuard>} />
            <Route path='clients/ajouter-client' element={<ClientsForm />} />
            <Route path='products' element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <Products />
              </RoleGuard>} />
            <Route path='products/ajouter-product' element={<ProductForm />} />

            <Route
              path="products/:id"
              element={
                <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                  <ProductDetails />
                </RoleGuard>
              }
            />
            <Route
              path="products/edit/:id"
              element={
                <RoleGuard roles={["ADMIN", "MANAGER"]}>
                  <ProductForm />
                </RoleGuard>
              }
            />


            <Route path='orders' element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <Orders />
              </RoleGuard>
            } />
            <Route path='orders/ajouter-order' element={<OrdersForm />} />
            <Route path='users' element={
              <RoleGuard roles={["ADMIN"]}>
                <Users />
              </RoleGuard>
            } />
            <Route path='users/ajouter-user' element={
              <RoleGuard roles={["ADMIN"]}>
                <UserForm />
              </RoleGuard>} />
            <Route path='profile' element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <Profile />
              </RoleGuard>} />
            <Route path='profile/edit-profile' element={
              <RoleGuard roles={["ADMIN", "MANAGER", "AGENT"]}>
                <EditProfile />
              </RoleGuard>} />
          </Route>

        </Route>



      </Routes>







    </>
  )
}

export default App
