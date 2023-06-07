import React from 'react'
import NavBar from '../../../Shared/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../../Shared/Footer'

const Main = () => {
    
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main