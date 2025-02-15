import './Navbar.css'
import Slider from './Slider.tsx'
import { UseSettingsContext } from '../hooks/UseSettingsContext.tsx'

const Navbar = () => {
  const { settings } = UseSettingsContext()

  return (
    <nav>
      <Slider propertyLabel={`refresh time`} propertyValue={settings.refresh} />
    </nav>
  )
}

export default Navbar
