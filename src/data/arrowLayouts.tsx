import { ReactElement } from 'react'
// import { TiArrowRightOutline } from 'react-icons/ti'
import rowLayouts from './rowLayouts.tsx'

export const arrowLayouts: ReactElement[] = [
  <div className={`pattern`}>
    {rowLayouts.allLeft()}
    {rowLayouts.allLeft()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allRight()}
    {rowLayouts.allRight()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allRight()}
    {rowLayouts.allLeft()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allLeft()}
    {rowLayouts.allRight()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allRight()}
    {rowLayouts.midLeft()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allLeft()}
    {rowLayouts.midRight()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allLeft()}
    {rowLayouts.midLeft()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern`}>
    {rowLayouts.allRight()}
    {rowLayouts.midRight()}
    {rowLayouts.allRight()}
  </div>,
]
