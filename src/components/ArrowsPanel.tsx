import { arrowLayouts } from '../data/arrowLayouts.tsx'
import './Arrow.css'
import { UsePatternContext } from '../hooks/UsePatternContext.tsx'

const ArrowsPanel = () => {
  const { patternIndex } = UsePatternContext()
  console.log('****()** number:', patternIndex)

  return (
    <div>
      <div className="arrows symbols">{arrowLayouts[patternIndex]}</div>
    </div>
  )
}

export default ArrowsPanel
