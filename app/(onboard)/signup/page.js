"use client"
import { useState } from 'react';

export default function SignUp() {
  const [otpEnabled, setOtpEnabled] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <input
              type="file"
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              type="text"
              disabled={!otpEnabled}
              className="block w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setOtpEnabled(true)}
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
            >
              Enable OTP
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
