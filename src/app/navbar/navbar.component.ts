import { Component, OnInit } from '@angular/core';
import { ThemingService, TranslationService } from '@kleeen/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public theming: ThemingService,
    public language: TranslationService,
  ) { }

  ngOnInit() {
  }

  public onSelectionChange(entry) {
    this.theming.setTheme(entry);
  }

  public onLanguageChange(lang) {
    this.language.useLang(lang);
  }
}
