import { createContext, ReactNode, useState } from 'react'
import { data } from '../data/data.ts'
import { SettingsObject } from '../types.ts'

const defaultSettings = {
  timeout: data.defaultTimeout,
  refresh: data.defaultRefresh,
}

export interface SettingsContextType {
  settings: SettingsObject
  handleChangeTimeout: (newTimeout: number) => void
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  handleChangeTimeout: () => {},
})

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [settings, setSettings] = useState<SettingsObject>(defaultSettings)

  const handleChangeTimeout = (newTimeout: number): void => {
    if (newTimeout !== settings.timeout)
      setSettings(prev => ({ ...prev, timeout: newTimeout }))
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        handleChangeTimeout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
