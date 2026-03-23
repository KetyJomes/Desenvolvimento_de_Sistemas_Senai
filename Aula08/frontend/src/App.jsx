import './App.css'
import './List'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Product from './Product'
import List from './List'


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/List' element={<List />} />
    </Routes>
    </>
  )
}

export default App
