import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { StatCounterComponent } from './stat-counter/stat-counter.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AdvantagePickerService } from './services/AdvantagePickerService';
import { DisadvantageComponent } from './disadvantage/disadvantage.component';
import { DisadvantagePickerService } from './services/DisadvantagePickerService';
import { AdvantagesTableComponent } from './advantages-table/advantages-table.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CharacterComponent,
    StatCounterComponent,
    AdvantagesComponent,
    DisadvantageComponent,
    AdvantagesTableComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'character', component: CharacterComponent },
      { path: 'character1', component: StatCounterComponent},
    ])
  ],
  providers: [
    AdvantagePickerService,
    DisadvantagePickerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
