"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initial = searchParams.get("q") || ""

  const [query, setQuery] = useState(initial)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(query ? `?q=${query}` : "/product")
    }, 400) 

    return () => clearTimeout(timer)
  }, [query, router])


  return (
 <input
    type="text"
    placeholder="Search for products, brands..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="
     
      w-full max-w-md
      pl-12 pr-4 py-3
      rounded-full
      bg-white dark:bg-zinc-900
      text-gray-900 dark:text-white
      placeholder-gray-400
      border border-gray-200 dark:border-zinc-700
      shadow-sm
      focus:outline-none
      focus:ring-2 focus:ring-indigo-500
      focus:border-indigo-500
      transition
      duration-200
    "
  />
  )
}
