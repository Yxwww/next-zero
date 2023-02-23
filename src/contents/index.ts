import { createLfviewExperience } from './lfview'
import { createCurvenoteExperience } from './curvenote'
import { createERWearExperience } from './erwear'
import { createSodExperience } from './sod'

export const ERWearExperience = createERWearExperience()
export const LfviewExperience = createLfviewExperience()
export const sodExp = createSodExperience()
export const curvenoteExp = createCurvenoteExperience()
export function getExperience() {
  return [curvenoteExp, LfviewExperience, ERWearExperience, sodExp]
}
