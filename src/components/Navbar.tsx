import './Navbar.css'
import Slider from './Slider.tsx'
import { UseSettingsContext } from '../hooks/UseSettingsContext.tsx'
import { data } from '../data/data.ts'

const Navbar = () => {
  const { settings, handleSetTimeout, handleSetRefresh } = UseSettingsContext()

  return (
    <nav>
      <Slider
        propertyLabel={`Timeout time`}
        propertyValue={settings.timeout}
        minValue={0}
        maxValue={data.timeout.maximum}
        value={settings.timeout}
        setValue={handleSetTimeout}
      />
      <Slider
        propertyLabel={`Refresh time`}
        propertyValue={settings.refresh}
        minValue={0}
        maxValue={data.refresh.maximum}
        value={settings.refresh}
        setValue={handleSetRefresh}
      />
    </nav>
  )
}

export default Navbar
