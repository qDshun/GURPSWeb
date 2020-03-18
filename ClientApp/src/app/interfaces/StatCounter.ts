import { Stat } from ".";

export interface StatCounter {
  statName: string,
  statCost: number,
  statLevel: number,
  defaultStatLevel: number,
  boundTo?: Stat,
}
