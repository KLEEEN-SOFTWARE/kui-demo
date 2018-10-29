import { Component, ViewChild } from '@angular/core';
import { DashboardComponent, KuiCardState } from '@kleeen/dashboard';
import { NetHealthCardComponent } from '../net-health-card/net-health-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AppDashboardComponent {

  @ViewChild('dashboard') kuiDashboardApi: DashboardComponent;

  public deleteAllCards() {
    this.kuiDashboardApi.removeCards();
  }

  public addNetHealthCard() {

    this.kuiDashboardApi.addCard(NetHealthCardComponent, {
      size: KuiCardState.Card,
      type: 'NetHealthCardComponent',
    });
  }

  public refreshCards() {
    this.kuiDashboardApi.refreshCards();
  }

  public syncCards() {
    this.kuiDashboardApi.syncCards();
  }

  public setMasonryType = () => {
    this.kuiDashboardApi.setMasonryType();
  }

  public setGridType = () => {
    this.kuiDashboardApi.setGridType();
  }

}
