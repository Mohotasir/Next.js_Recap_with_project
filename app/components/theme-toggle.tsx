"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <FaSun className='absolute w-10 h-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'></FaSun>
            <FaMoon className='absolute w-10 h-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'></FaMoon>
        </Button>
    </div>
  )
}
