"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"
import LoginButton from "./LoginButton"
import RegisterButton from "./RegisterButton"
import { signOut, useSession } from "next-auth/react"
import { Button } from "../../components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (path) =>
    `text-sm font-semibold transition
     ${pathname === path
      ? "text-indigo-600"
      : "text-gray-900 dark:text-white hover:text-indigo-600"
    }`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
          ? "h-16 bg-white/80 dark:bg-black backdrop-blur shadow-md"
          : "h-24 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between gap-10">
        <div>
          <Link href="/" className=" font-extrabold italic text-2xl " >STYLISH</Link>
        </div>
        <div className="flex items-center gap-10">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/product" className={linkClass("/product")}>
            Products
          </Link>
        </div>
          {
            status ==="loading" && <p>Loading.........</p>
          }
          {
            status === "authenticated" && (
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button onClick={()=>signOut()} variant='default'>SignOut</Button>
              </div>
            )
          }
          {
            status === "unauthenticated" && (
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LoginButton />
                <RegisterButton />
              </div>
            )
          }

        
      </div>
    </nav>
  )
}
