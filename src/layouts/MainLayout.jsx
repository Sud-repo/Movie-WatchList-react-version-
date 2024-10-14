import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"


function MainLayout() {

  return (
    <>
        <Header title={ import.meta.env.VITE_APP_NAME } />
        <Navbar />
        <Outlet />
        <Footer title= { import.meta.env.VITE_APP_NAME } />
    </>
  )
}

export default MainLayout