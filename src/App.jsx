import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Router, Routes,Route,Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './pages/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <AppRoutes />
       <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
   
    </>
  )
}

export default App
