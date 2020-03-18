import { Advantage } from '../models/Advantage';
import { AdvantageCostType } from '../enums';
/*
@Injectable({
  providedIn: 'root'
})*/

export class DisadvantagePickerService {
  constructor() {
  }
  private readonly byLvl: RegExp = /-\d+\/lvl/;
  private readonly constPrice: RegExp = /^-\d+/;
  private readonly resistable: RegExp = /^-\d+\*$/;
  

  getDisadvantageCostType(adv: Advantage): AdvantageCostType {
    if (this.byLvl.test(adv.formula))
      return AdvantageCostType.value;
    if (this.resistable.test(adv.formula))
      return AdvantageCostType.resistable;
    if (this.constPrice.test(adv.formula))
      return AdvantageCostType.check
    return AdvantageCostType.value;
  }

  getDisadvantageCost(adv: Advantage): number {
    if (adv.formula.match(this.constPrice))
      return +adv.formula.match(this.constPrice)[0];
    return 0;
  }

  
}

