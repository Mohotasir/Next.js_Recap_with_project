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
      placeholder="Search products..."
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      className="w-full p-3 border rounded-md m-4"
    />
  )
}
