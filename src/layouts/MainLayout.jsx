import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


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