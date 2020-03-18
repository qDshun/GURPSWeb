import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
export interface IAppConfig {
  DEFAULT_STAT_LEVEL: number;
};

export const DebugConfig: IAppConfig = {
  DEFAULT_STAT_LEVEL: 10,
};
