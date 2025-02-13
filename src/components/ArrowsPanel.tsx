import { arrowLayouts } from '../data/arrowLayouts.tsx'
import './Arrow.css'
import { UsePatternContext } from '../hooks/UsePatternContext.tsx'
import { useEffect, useState } from 'react'
import { UseSettingsContext } from '../hooks/UseSettingsContext.tsx'

const ArrowsPanel = () => {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [reactionTime, setReactionTime] = useState<number | null>(null)
  const [message, setMessage] = useState<string>('-')

  const { patternIndex, changePattern } = UsePatternContext()
  const { settings } = UseSettingsContext()
  console.log('****()** number:', patternIndex)
  console.log('****()** settings:', settings)

  const startNewCycle = () => {
    changePattern()
    setStartTime(Date.now())
    setReactionTime(null)
    setMessage('-')
    // setTimeout(startNewCycle, settings.refresh)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!startTime) return
    if (event.key.toLowerCase() !== 'q' && event.key.toLowerCase() !== 'p')
      return

    const elapsedTime = Date.now() - startTime
    setReactionTime(elapsedTime)

    if (elapsedTime > settings.timeout) {
      setMessage('Too slow!')
    } else if (event.key.toLowerCase() === 'q' && patternIndex < 8) {
      setMessage(`Yes in ${reactionTime} ms`)
    }

    // setTimeout(startNewCycle, settings.refresh)
  }

  useEffect(() => {
    const cycle = setTimeout(startNewCycle, settings.refresh)

    return () => clearTimeout(cycle) // Cleanup
  }, [patternIndex, settings.refresh]) // Rerun when pattern changes

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [startTime])

  return (
    <div className={`pattern-container`}>
      <div className="arrows symbols">{arrowLayouts[patternIndex]}</div>
      <div className="message">{message}</div>
    </div>
  )
}

export default ArrowsPanel
