"use client"
import Footer from '@/components/footer/Footer'
import Nav from '@/components/header/Nav'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
    
    <Nav />
    <div 
      className="container mx-auto  px-3 sm:py-20 py-10 flex justify-center items-center" 
      style={{ backgroundImage: "url('/category/Background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <h4 className="text-3xl font-bold mb-2">Login</h4>
          <p className="text-gray-500">Welcome back!</p>
        </div>
        <form>
          <div className="flex flex-col items-center gap-4 mb-4">
            <input className="border rounded-md p-2 w-full" type="text" placeholder="Phone Number*" required />
            <input className="border rounded-md p-2 w-full" type="password" placeholder="Password*" required />
          </div>
          <button className="bg-blue-500 text-white rounded-md p-2 w-full" type="submit">Login</button>
        </form>
        <div className="text-center py-4">
          <span className="text-gray-500">
            Forgot your password? <Link className="text-red-500" href="/forget">Reset it</Link>
          </span>
        </div>
        <div className="text-center py-4">
          <span className="text-gray-500">
            Don't have an account? <Link className="text-red-500" href="/registration">Register Now</Link>
          </span>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login
