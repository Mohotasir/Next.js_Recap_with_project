"use client"
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
   return (
      <div className="mt-6 lg:mt-12 flex items-center justify-center  px-4">
         <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
               Create an Account
            </h2>
            <p className="text-sm text-center text-gray-500 mt-2">
               Sign up to get started
            </p>

            {/* Form */}
            <form className="mt-6 flex flex-col gap-4">

               {/* Username */}
               <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     Username
                  </label>
                  <input
                     type="text"
                     placeholder="Enter your username"
                     className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     required
                  />
               </div>

               {/* Email */}
               <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     Email
                  </label>
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     required
                  />
               </div>

               {/* Password */}
               <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     Password
                  </label>
                  <input
                     type="password"
                     placeholder="Create a password"
                     className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     required
                  />
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium rounded-lg py-2"
               >
                  Register
               </button>
            </form>
            <p className="text-sm text-center text-gray-600 mt-6">
               Already have an account?{" "}
               <Link href={"/login"} className="text-indigo-600 hover:underline cursor-pointer">
                  Login
               </Link>
            </p>
         </div>
      </div>

   )
}
