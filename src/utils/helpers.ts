import { arrowLayouts } from '../data/arrowLayouts.tsx'

export default {
  getNumber: function () {
    return Math.floor(Math.random() * arrowLayouts.length)
  },
}
