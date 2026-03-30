import './App.css'
import './pages/List'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Product from './pages/Product'
import List from './pages/List'
import Register from './pages/Register'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/List' element={<List />} />
    </Routes>
    </>
  )
}

export default App
