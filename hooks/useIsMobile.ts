import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const listener = () => setIsMobile(window.innerWidth < 768)

    listener()

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return isMobile
}
