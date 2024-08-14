import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import Linku from './pages/Linku/Linku'
import Porder from './pages/Porder/Porder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'



const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          
          <Route path='./order' element={<Porder />} />
          <Route path='/' element={<Linku />} />
          <Route path='/cart'element={<Cart />}/>

        </Routes>

      </div>
      <Footer/>
    </>
  )
}

export default App
