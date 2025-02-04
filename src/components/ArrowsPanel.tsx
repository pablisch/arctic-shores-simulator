import { arrowLayouts } from '../data/arrowLayouts.tsx'
import './Arrow.css'

const ArrowsPanel = () => {
  const layoutNumber = Math.floor(Math.random() * arrowLayouts.length)
  console.log('****()** number:', layoutNumber)

  return (
    <div>
      <div className="arrows symbols">{arrowLayouts[layoutNumber]}</div>
    </div>
  )
}

export default ArrowsPanel
