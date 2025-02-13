import helpers from '../utils/helpers.ts'
import { createContext, ReactNode, useState } from 'react'

const initialPatternIndex = helpers.getNumber()

export interface PatternContextType {
  patternIndex: number
  changePattern: () => void
}

export const PatternContext = createContext<PatternContextType>({
  patternIndex: initialPatternIndex,
  changePattern: () => {},
})

export const PatternContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [patternIndex, setPatternIndex] = useState<number>(initialPatternIndex)

  // const { settings } = UseSettingsContext()

  const changePattern = (): void => {
    const newPatternIndex = getNewPatternIndex()
    setPatternIndex(newPatternIndex)
  }

  const getNewPatternIndex = (): number => {
    const randomNumber = helpers.getNumber()
    if (randomNumber === patternIndex) return getNewPatternIndex()

    return randomNumber
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPatternIndex(getNewPatternIndex())
  //   }, settings.refresh)
  //
  //   return () => clearInterval(interval)
  // }, [patternIndex])

  return (
    <PatternContext.Provider
      value={{
        patternIndex,
        changePattern,
      }}
    >
      {children}
    </PatternContext.Provider>
  )
}
