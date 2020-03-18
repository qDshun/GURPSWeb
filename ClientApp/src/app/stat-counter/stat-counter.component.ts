import { Component, Input, Output } from '@angular/core';
import { DebugConfig } from 'src/app/app.component';
import { EventEmitter } from '@angular/core';
import { StatCounter, Stat } from 'src/app/interfaces/index'

@Component({
  selector: 'app-stat-counter-component',
  templateUrl: './stat-counter.component.html'
})
export class StatCounterComponent {
  public currentStatLevel: number;
  public totalStatCost: number;
  @Input() statCounter: StatCounter;
  @Input() boundStat?: Stat;
  @Output() changeTotal = new EventEmitter<number>();
  @Output() changeStatCounterState = new EventEmitter<StatCounter>();


  constructor() {
  }

  ngOnInit() {
    if (!this.statCounter) {
      this.statCounter = CreateStatCounter('Default', 10, 10);
    }
    this.currentStatLevel = this.statCounter.statLevel;
    this.totalStatCost = 0;

  }

  public incrementCounter() {

    console.log('On increment end: ');
    console.log(this.currentStatLevel);

    this.currentStatLevel++;
    this.totalStatCost += this.statCounter.statCost;

    this.changeStatCounterState.emit(this.GetStatCounterState());
    this.changeTotal.emit(this.statCounter.statCost);
  }

  public decrementCounter() {
    this.currentStatLevel--;
    this.totalStatCost -= this.statCounter.statCost;

    this.changeStatCounterState.emit(this.GetStatCounterState());
    this.changeTotal.emit(-this.statCounter.statCost);
  }

  private GetStatCounterState() {
    return CreateStatCounter(
      this.statCounter.statName,
      this.statCounter.statCost,
      this.statCounter.defaultStatLevel,
      this.currentStatLevel);
  }
}


export function CreateStatCounter(statName: string, statCost: number, defaultStatLevel?: number, statLevel?: number, boundTo?:Stat): StatCounter {

  if (statLevel == null) 
    statLevel = DebugConfig.DEFAULT_STAT_LEVEL;
  if (defaultStatLevel == null)
    defaultStatLevel = DebugConfig.DEFAULT_STAT_LEVEL;
  if (boundTo) {
    statLevel = 0;
    defaultStatLevel = 0;
  }
  if (!boundTo)
    boundTo = null;
  return {
    defaultStatLevel,
    statName,
    statCost,
    statLevel,
    boundTo,
  };

}
