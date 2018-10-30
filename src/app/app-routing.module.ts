import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'dashboard',
    component: AppDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
