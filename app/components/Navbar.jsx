"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "h-16 bg-white/80 dark:bg-black backdrop-blur shadow-md"
        : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-center gap-10">
        <Link href="/" className="text-lg font-semibold hover:text-indigo-600">
          Home
        </Link>

        <Link href="/product" className="text-lg font-semibold hover:text-indigo-600">
          Products
        </Link>
      </div>
    </nav>
  )
}
