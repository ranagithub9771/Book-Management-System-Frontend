import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import EditBook from './pages/EditBook'
import Navbar from './components/Narbar'
import AddBook from './pages/AddBook'
const App = () => {
  return (
    <>
    {/* <h1 className='text-center text-3xl font-bold my-4'>Book Manager</h1> */}
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/add" element={<AddBook/> }/>
      <Route path="/edit/:id" element={<EditBook/> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App