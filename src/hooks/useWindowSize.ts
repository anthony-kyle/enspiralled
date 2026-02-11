import { useEffect, useState } from "react"

export function useWindowSize() {
    const [size, setSize] = useState(() => ({
      width: window.innerWidth - 16,
      height: window.innerHeight - 16,
    }))
  
    useEffect(() => {
      const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return size
  }