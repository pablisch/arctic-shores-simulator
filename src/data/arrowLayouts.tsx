import { ReactElement } from 'react'
import rowLayouts from './rowLayouts.tsx'

export const arrowLayouts: ReactElement[] = [
  <div className={`pattern all-left-3`}>
    {rowLayouts.allLeft()}
    {rowLayouts.allLeft()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern mid-left-3`}>
    {rowLayouts.allRight()}
    {rowLayouts.allLeft()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern single-left-3`}>
    {rowLayouts.allRight()}
    {rowLayouts.midLeft()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern break-left-3`}>
    {rowLayouts.allLeft()}
    {rowLayouts.midLeft()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern dash-left-3`}>
    {rowLayouts.allDash()}
    {rowLayouts.dashLeft()}
    {rowLayouts.allDash()}
  </div>,
  <div className={`pattern dash-left-1`}>{rowLayouts.dashLeft()}</div>,
  <div className={`pattern all-left-1`}>{rowLayouts.allLeft()}</div>,
  <div className={`pattern mid-left-1`}>{rowLayouts.midLeft()}</div>,

  <div className={`pattern mid-right-3`}>
    {rowLayouts.allLeft()}
    {rowLayouts.allRight()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern single-right-3`}>
    {rowLayouts.allLeft()}
    {rowLayouts.midRight()}
    {rowLayouts.allLeft()}
  </div>,
  <div className={`pattern all-right-3`}>
    {rowLayouts.allRight()}
    {rowLayouts.allRight()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern break-right-3`}>
    {rowLayouts.allRight()}
    {rowLayouts.midRight()}
    {rowLayouts.allRight()}
  </div>,
  <div className={`pattern dash-right-3`}>
    {rowLayouts.allDash()}
    {rowLayouts.dashRight()}
    {rowLayouts.allDash()}
  </div>,
  <div className={`pattern dash-right-1`}>{rowLayouts.dashRight()}</div>,
  <div className={`pattern all-right-1`}>{rowLayouts.allRight()}</div>,
  <div className={`pattern mid-right-1`}>{rowLayouts.midRight()}</div>,
  <div className={`pattern cross-left-3`}>
    {rowLayouts.allCross()}
    {rowLayouts.crossLeft()}
    {rowLayouts.allCross()}
  </div>,
  <div className={`pattern cross-left-1`}>{rowLayouts.crossLeft()}</div>,
  <div className={`pattern cross-right-3`}>
    {rowLayouts.allCross()}
    {rowLayouts.crossRight()}
    {rowLayouts.allCross()}
  </div>,
  <div className={`pattern cross-right-1`}>{rowLayouts.crossRight()}</div>,
]
