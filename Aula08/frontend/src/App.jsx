import './App.css'
import './List'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import List from './List'
import Home from './Home'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/List' element={<List />} />
    </Routes>
    </>
  )
}

export default App
