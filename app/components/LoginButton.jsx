"use client"
import React from 'react'
import { Button } from '../../components/ui/button'
import { signIn } from 'next-auth/react'
export default function LoginButton() {
  return (
    <div>
       <Button onClick={() => signIn()} variant='default'>Login</Button>
    </div>
  )
}
