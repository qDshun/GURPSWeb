
import { Rarity, AdvantageType } from "../enums";

export class Advantage {
  id: number;
  nameRU: string;
  nameEN: string;
  formula: string;
  type: AdvantageType;
  rarity: Rarity;
}
