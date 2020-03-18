import { Stat } from './Stat';

export interface Character {
  id: number,
  name: string,
  spentPoints: number,
  characterStats: Stat[],
}
