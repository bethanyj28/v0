import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <FontAwesomeIcon onClick={() => setTheme(theme === "light" ? "dark" : "light")} icon={theme === "light" ? faMoon : faSun} size="lg" />
    )
} 

export default DarkModeToggle
