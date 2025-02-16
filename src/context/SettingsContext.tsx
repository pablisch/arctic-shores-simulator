import { createContext, ReactNode, useState } from 'react'
import { data } from '../data/data.ts'
import { SettingsObject } from '../types.ts'

const defaultSettings = {
  timeout: data.timeout.default,
  refresh: data.refresh.default,
}

export interface SettingsContextType {
  settings: SettingsObject
  handleSetTimeout: (newTimeout: number) => void
  handleSetRefresh: (newRefresh: number) => void
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  handleSetTimeout: () => {},
  handleSetRefresh: () => {},
})

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [settings, setSettings] = useState<SettingsObject>(defaultSettings)

  const handleSetTimeout = (newTimeout: number): void => {
    if (newTimeout >= data.timeout.minimum) {
      // Ensure refresh is never set less that 0.2 secs more than timeout
      const refreshRestraint = newTimeout + 200
      const minimumRefresh =
        refreshRestraint > data.refresh.minimum
          ? refreshRestraint
          : data.refresh.minimum
      if (minimumRefresh > settings.refresh) {
        setSettings(prev => ({
          ...prev,
          timeout: newTimeout,
          refresh: minimumRefresh,
        }))
      } else {
        setSettings(prev => ({ ...prev, timeout: newTimeout }))
      }

      return
    }
    if (
      newTimeout < data.timeout.minimum &&
      settings.timeout > data.timeout.minimum
    )
      setSettings(prev => ({ ...prev, timeout: data.timeout.minimum }))
  }

  const handleSetRefresh = (newRefresh: number): void => {
    // Ensure refresh is never set less that 0.2 secs more than timeout
    const refreshRestraint = settings.timeout + 200
    const minimum =
      refreshRestraint > data.refresh.minimum
        ? refreshRestraint
        : data.refresh.minimum

    if (newRefresh >= minimum) {
      setSettings(prev => ({ ...prev, refresh: newRefresh }))

      return
    }
    if (newRefresh < minimum && settings.refresh > minimum)
      setSettings(prev => ({ ...prev, refresh: minimum }))
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        handleSetTimeout,
        handleSetRefresh,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
