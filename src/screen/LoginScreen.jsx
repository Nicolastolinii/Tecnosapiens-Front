import React from 'react'
import Login from '../components/login/Login'
import { Footer } from '../Footer'

export const LoginScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Login/>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  )
}
