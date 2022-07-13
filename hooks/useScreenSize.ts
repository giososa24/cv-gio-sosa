import { useState, useEffect } from 'react'

type UseScreenSizeType = {
  width: number
  height: number
}

const useScreenSize = (): UseScreenSizeType => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleResize = (): void => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return (): void => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return { width, height }
}

export default useScreenSize
