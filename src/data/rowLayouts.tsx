import {
  TiArrowLeftOutline,
  TiArrowRightOutline,
  TiMinusOutline,
  TiTimesOutline,
} from 'react-icons/ti'

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

  allCross: () => (
    <div className="row">
      {Array.from({ length: 5 }, (_, index) => (
        <TiTimesOutline key={index} />
      ))}
    </div>
  ),

  allDash: () => (
    <div className="row">
      {Array.from({ length: 5 }, (_, index) => (
        <TiMinusOutline key={index} />
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

  dashRight: () => (
    <div className="row">
      <TiMinusOutline />
      <TiMinusOutline />
      <TiArrowRightOutline />
      <TiMinusOutline />
      <TiMinusOutline />
    </div>
  ),

  dashLeft: () => (
    <div className="row">
      <TiMinusOutline />
      <TiMinusOutline />
      <TiArrowLeftOutline />
      <TiMinusOutline />
      <TiMinusOutline />
    </div>
  ),

  crossLeft: () => (
    <div className="row">
      <TiTimesOutline />
      <TiTimesOutline />
      <TiArrowLeftOutline />
      <TiTimesOutline />
      <TiTimesOutline />
    </div>
  ),

  crossRight: () => (
    <div className="row">
      <TiTimesOutline />
      <TiTimesOutline />
      <TiArrowRightOutline />
      <TiTimesOutline />
      <TiTimesOutline />
    </div>
  ),
}
