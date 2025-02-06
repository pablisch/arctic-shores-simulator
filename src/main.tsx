import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PatternContextProvider } from './context/PatternContext.tsx'
import { SettingsContextProvider } from './context/SettingsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsContextProvider>
      <PatternContextProvider>
        <App />
      </PatternContextProvider>
    </SettingsContextProvider>
  </StrictMode>
)
