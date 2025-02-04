import {
  TiArrowRightOutline,
  TiArrowLeftOutline,
  TiTimesOutline,
  TiMinusOutline,
} from 'react-icons/ti'
import './Arrow.css'

const Arrow = () => {
  return (
    <div className="symbols">
      <TiArrowRightOutline />
      <TiArrowLeftOutline />
      <TiTimesOutline />
      <TiMinusOutline />
    </div>
  )
}

export default Arrow
