import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styled from 'styled-components'

const Button = styled.button`
    color: var(--primary-text)
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`

const DarkModeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> switch theme </Button>
    )
} 

export default DarkModeToggle
