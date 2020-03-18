import { Component } from '@angular/core';
import { CreateStatCounter } from 'src/app/stat-counter/stat-counter.component'
import { StatCounter, Stat, Character } from 'src/app/interfaces/index'
import { DebugConfig } from 'src/app/app.component';
import { Advantage } from '../models/Advantage';
import { Rarity, AdvantageType } from '../enums';

@Component({
  selector: 'app-character-component',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  public currentCharacter: Character = {} as any;
  public statCounters: StatCounter[] = [];
  public AdvantagesAvailiable: Advantage[];
  public a4: Advantage = {
    id: 3,
    nameRU: 'Альтруист',
    nameEN: 'Selfless',
    type: AdvantageType.M,
    formula: '-5*',
    rarity: Rarity.common,
  }

  constructor() {

  }

  ngOnInit() {
    this.currentCharacter = this.createDefaultCharacter();
    this.currentCharacter.characterStats.forEach((value, index) => (
      this.statCounters.push(CreateStatCounter(value.name, value.levelCost, value.levelDefault, value.level,
        this.currentCharacter.characterStats.find(s => s.name == value.boundTo)))))

    
    //                                  TEST THIS TO BE DELETED
    let a1: Advantage = {
      id: 1,
      nameRU: 'Адаптация к поверхности 1',
      nameEN: 'Terrain Adaptation',
      type: AdvantageType.P,
      formula: '0',
      rarity: Rarity.exotic,
    };
    let a4: Advantage = {
      id: 1,
      nameRU: 'Адаптация к поверхности 2',
      nameEN: 'Terrain Adaptation',
      type: AdvantageType.P,
      formula: '5',
      rarity: Rarity.exotic,
    };
    let a2: Advantage = {
      id: 2,
      nameRU: 'Адаптация к темноте',
      nameEN: 'Night Vision',
      type: AdvantageType.P,
      formula: '1/lvl',
      rarity: Rarity.common,
    }
    let a3: Advantage = {
      id: 3,
      nameRU: 'Амфибия',
      nameEN: 'Amphibious',
      type: AdvantageType.P,
      formula: '10',
      rarity: Rarity.exotic,
    }

    

    this.AdvantagesAvailiable = [a1, a4, a2, a3];


    //                                  /TEST THIS TO BE DELETED

      }

  StatCounterStateChange(event) {
    let currentStat = this.currentCharacter.characterStats.find(s => s.name == event.statName);
    if (currentStat) {
      currentStat.level = event.statLevel
    }
    if (currentStat.name = 'ST')
  }
  spentPointsChange(event) {
    this.currentCharacter.spentPoints += event;
  }


  private createDefaultCharacter(): Character {
    let character = {} as Character;
    character.characterStats = this.getDefaultStats();
    character.id = -1;
    character.name = 'No character found';
    character.spentPoints = 0;
    return character;
  }

  private getDefaultStats(): Stat[]{
    return [CreateStat('ST', 10),
      CreateStat('DX', 20),
      CreateStat('IQ', 20),
      CreateStat('HT', 10),
      CreateStat('HP', 2, null, null, 'ST'),
      CreateStat('Will', 5, null, null, 'IQ'),
      CreateStat('Per', 5, null, null, 'IQ'),
      CreateStat('FP', 3, null, null, 'HT'),
    ];
  }

  
}

function CreateStat(name: string, levelCost: number, level?: number, levelDefault?: number, boundTo?: string): Stat {
  if (level == null)
    level = DebugConfig.DEFAULT_STAT_LEVEL;
  if (levelDefault == null)
    levelDefault = DebugConfig.DEFAULT_STAT_LEVEL;
  return {
    name,
    levelCost,
    level,
    levelDefault,
    boundTo,
  };
}

