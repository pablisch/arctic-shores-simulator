import { useContext } from 'react'
import { PatternContext } from '../context/PatternContext.tsx'

export const UsePatternContext = () => {
  const context = useContext(PatternContext)
  if (!context) {
    throw new Error(
      'usePatternContext must be used within use PatternContextProvider'
    )
  }

  return context
}
