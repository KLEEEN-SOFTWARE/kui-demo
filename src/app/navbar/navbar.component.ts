import { Component } from '@angular/core';
import { ThemingService, TranslationService } from '@kleeen/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public theme = 'dark';
  public lang = 'en-initial';
  public isMenuVisible = false;
  public menuOptions = [
    { label: 'Dashboard', action: () => { this.router.navigate(['/dashboard']); this.toggleMenu(); } },
    { label: 'Table', action: () => { this.router.navigate(['/table']); this.toggleMenu(); } },
    { label: 'Switch Language', action: () => { this.toggleLanguage(); this.toggleMenu(); } },
    { label: 'Switch Theme', action: () => { this.toggleTheme(); this.toggleMenu(); } },
  ];

  constructor(
    public theming: ThemingService,
    public language: TranslationService,
    public router: Router,
  ) { }

  public toggleTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
    this.theming.setTheme(this.theme);
  }

  public toggleLanguage() {
    if (this.lang === 'en-initial') {
      this.lang = 'es';
    } else {
      this.lang = 'en-initial';
    }
    this.language.useLang(this.lang);
  }

  public toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
