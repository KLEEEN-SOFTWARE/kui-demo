import { Component } from '@angular/core';
import { ThemingService, TranslationService } from '@kleeen/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kleeen Software';
  constructor(
    public theming: ThemingService,
    public translation: TranslationService,
  ) {
    this.theming.setTheme('dark');
    this.translation.initializeLang('en-initial');
  }
}
