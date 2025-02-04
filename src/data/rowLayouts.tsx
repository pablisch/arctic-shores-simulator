import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti'

export default {
  allLeft: () => (
    <div className="row">
      {Array.from({ length: 5 }, (_, index) => (
        <TiArrowLeftOutline key={index} />
      ))}
    </div>
  ),

  allRight: () => (
    <div className="row">
      {Array.from({ length: 5 }, (_, index) => (
        <TiArrowRightOutline key={index} />
      ))}
    </div>
  ),

  midLeft: () => (
    <div className="row">
      <TiArrowRightOutline />
      <TiArrowRightOutline />
      <TiArrowLeftOutline />
      <TiArrowRightOutline />
      <TiArrowRightOutline />
    </div>
  ),

  midRight: () => (
    <div className="row">
      <TiArrowLeftOutline />
      <TiArrowLeftOutline />
      <TiArrowRightOutline />
      <TiArrowLeftOutline />
      <TiArrowLeftOutline />
    </div>
  ),
}
