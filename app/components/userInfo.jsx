"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
export default function UserInfo() {
  const session = useSession()
  return (
    <div>
      <h1>User Info</h1>
      <div>
          {JSON.stringify(session)}
      </div>
    </div>
  )
}