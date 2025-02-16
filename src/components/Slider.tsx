import './Slider.css'

interface SliderProps {
  propertyLabel: string
  propertyValue: number
  minValue: number
  maxValue: number
  value: number
  setValue: (value: number) => void
}

const Slider = ({
  propertyLabel,
  propertyValue,
  minValue,
  maxValue,
  value,
  setValue,
}: SliderProps) => {
  return (
    <div className="slider-container">
      <p
        className={`slider-label`}
      >{`${propertyLabel}:\n ${(propertyValue / 1000).toFixed(2)} seconds`}</p>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
    </div>
  )
}

export default Slider
