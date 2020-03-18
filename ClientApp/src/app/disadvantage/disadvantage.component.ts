import { Component, Input } from '@angular/core';
import { Advantage } from '../models/Advantage';
import { AdvantageCostType } from '../enums';
import { DisadvantagePickerService } from '../services/DisadvantagePickerService';

@Component({
  selector: 'app-disadvantage-component',
  templateUrl: './disadvantage.component.html'
})
export class DisadvantageComponent {
  @Input() advantage: Advantage;
  public firstCost: number;
  public advantageCostType: AdvantageCostType;
  public isValue: boolean;
  public isResistable: boolean;
  constructor(
    private disadvantagePickerService: DisadvantagePickerService) {
  }
  
  ngOnInit() {
    this.advantageCostType = this.disadvantagePickerService.getDisadvantageCostType(this.advantage);

    if (this.advantageCostType != AdvantageCostType.value)
      this.firstCost = this.disadvantagePickerService.getDisadvantageCost(this.advantage);

    this.isValue = (this.advantageCostType == AdvantageCostType.value)
    this.isResistable = (this.advantageCostType == AdvantageCostType.resistable)
  }

  }
