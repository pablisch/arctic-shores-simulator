import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext.tsx'

export const UseSettingsContext = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error(
      'useSettingsContext must be used within use SettingsContextProvider'
    )
  }

  return context
}
