import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '@kleeen/core';
import { ComponentsModule, TableModule } from '@kleeen/components';
import { VisualizationsModule } from '@kleeen/visualizations';
import { DashboardModule } from '@kleeen/dashboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { NetHealthCardComponent } from './net-health-card/net-health-card.component';
import iconRegistry from '../assets/icons/iconRegistry'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    AppDashboardComponent,
    NetHealthCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      iconRegistry,
    }),
    CoreModule.getTranslateConfig(),
    ComponentsModule.forRoot(),
    VisualizationsModule,
    DashboardModule,
    TableModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  entryComponents: [
    NetHealthCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
