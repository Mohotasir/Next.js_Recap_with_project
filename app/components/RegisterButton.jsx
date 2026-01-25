import React from 'react'
import Link from 'next/link'
export default function RegisterButton() {
  return (
    <div>
       <Link href="/register" className='text-sm  font-semibold border rounded-lg px-4 py-2 transition text-gray-900 dark:text-white hover:text-indigo-600 bg-indigo-400 hover:text-white dark:hover:bg-indigo-600'>Register</Link>
    </div>
  )
}
