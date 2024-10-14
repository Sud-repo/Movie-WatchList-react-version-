import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
        <Header title={import.meta.env.VITE_APP_NAME} />
        <Outlet />
    </>
  )
}

export default AuthLayout