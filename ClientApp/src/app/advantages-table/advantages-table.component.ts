import { Component, Output, Input } from '@angular/core';
import { CreateStatCounter } from 'src/app/stat-counter/stat-counter.component'
import { StatCounter, Stat, Character } from 'src/app/interfaces/index'
import { DebugConfig } from 'src/app/app.component';
import { Advantage } from '../models/Advantage';
import { AdvantagePickerService } from '../services/AdvantagePickerService';

@Component({
  selector: 'app-advantages-table-component',
  templateUrl: './advantages-table.component.html'
})
export class AdvantagesTableComponent {
  @Input() AdvantagesAvailiable: Advantage[];
  constructor() {
  }

  ngOnInit() {
    console.log(this.AdvantagesAvailiable);
  }

  }
