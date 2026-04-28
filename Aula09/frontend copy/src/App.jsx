import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Mission from './pages/Mission'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
    </>
  )
}

export default App
