"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"
import LoginButton from "./LoginButton"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
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
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-center gap-10">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/product" className={linkClass("/product")}>
          Products
        </Link>
         <div className="flex items-center gap-2">
         <ThemeToggle />
         <LoginButton />
         </div>
      </div>
    </nav>
  )
}
