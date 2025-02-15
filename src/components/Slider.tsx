import './Slider.css'

interface SliderProps {
  propertyLabel: string
  propertyValue: number
}

const Slider = ({ propertyLabel, propertyValue }: SliderProps) => {
  return (
    <div className="slider-container">
      <p
        className={`slider-label`}
      >{`${propertyLabel}:\n ${(propertyValue / 1000).toFixed(2)} seconds`}</p>
      <input type="range" />
    </div>
  )
}

export default Slider
