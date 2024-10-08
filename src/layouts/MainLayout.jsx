import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function MainLayout() {

    const appTitle = 'Movie Watchlist'

  return (
    <>
        <Header title={ appTitle } />
        <Navbar />
        

        <Outlet />
        <Footer title= { appTitle } />
    </>
  )
}

export default MainLayout