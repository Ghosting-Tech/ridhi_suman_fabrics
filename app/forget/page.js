"use client"
// pages/ForgotPassword.js
import Footer from '@/components/footer/Footer';
import Nav from '@/components/header/Nav';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Nav />
      <div 
        className="container mx-auto px-3 sm:py-20 py-10 flex justify-center items-center" 
        style={{ backgroundImage: "url('/category/Background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="text-center mb-6">
            <h4 className="text-3xl font-bold mb-2">Forgot Password</h4>
            <p className="text-gray-500">Enter your phone number to reset your password</p>
          </div>
          <form>
            <div className="flex flex-col items-center gap-4 mb-4">
              <input className="border rounded-md p-2 w-full" type="text" placeholder="Phone Number*" required />
            </div>
            <button className="bg-blue-500 text-white rounded-md p-2 w-full" type="submit">Reset Password</button>
          </form>
          <div className="text-center py-4">
            <span className="text-gray-500">
              Remembered your password? <Link href="/login" className="text-red-500"> Login here</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
