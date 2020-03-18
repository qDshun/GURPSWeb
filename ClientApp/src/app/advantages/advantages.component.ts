import { Component, Input } from '@angular/core';
import { Advantage } from '../models/Advantage';
import { AdvantagePickerService } from '../services/AdvantagePickerService';
import { AdvantageCostType } from '../enums';

@Component({
  selector: 'app-advantages-component',
  templateUrl: './advantages.component.html'
})
export class AdvantagesComponent {
  @Input() advantage: Advantage;
  public firstCost: number;
  public advantageCostType: AdvantageCostType;
  public isValue: boolean;
  public isResistable: boolean;

  constructor(
    private advantagePickerSerice: AdvantagePickerService) {
  }

  ngOnInit() {

    this.advantageCostType = this.advantagePickerSerice.getAdvantageCostType(this.advantage);

    if (this.advantageCostType != AdvantageCostType.value)
      this.firstCost = this.advantagePickerSerice.getAdvantageCost(this.advantage);

    this.isValue = (this.advantageCostType == AdvantageCostType.value)
    this.isResistable = (this.advantageCostType == AdvantageCostType.resistable)
  }

  }
