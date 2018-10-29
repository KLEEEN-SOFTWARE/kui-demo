import { Component } from '@angular/core';
import { KuiCardModel, KuiCardTemplate } from '@kleeen/dashboard';

@Component({
  selector: 'app-net-health',
  template: `
  <ng-template #banner>
    <div class="banner">Net health banner</div>
  </ng-template>

  <ng-template #cards>
    <div>Net health card</div>
  </ng-template>

  <ng-template #sheet1>
    <div>Net health sheet 1</div>
  </ng-template>

  <ng-template #sheet2>
    <div>Net health sheet 2</div>
  </ng-template>

  <ng-template #sheet3>
    <div>Net health sheet 3</div>
  </ng-template>

  <ng-template #sheet4>
    <div>Net health sheet 4</div>
  </ng-template>

  <ng-template #fullscreen>
    <div>Net health fullscreen</div>
  </ng-template>
  `,
  styles: [`
  `],
})

export class NetHealthCardComponent extends KuiCardTemplate {
  public config: KuiCardModel = {
    card: {
      title: 'Net Health Card',
      description: 'This card is used to monitor the health of a network',
    },
    sheets: {
      sheet1: {
        title: 'Sheet1 title',
        description: 'Lorem Ipsum sheet1 description',
        icon: 'cloud-monitor-upload',
      },
      sheet2: {
        title: 'Sheet2 title',
        description: 'Lorem Ipsum sheet2 description',
        icon: 'database-connect',
      },
      sheet3: {
        title: 'Sheet3 title',
        description: 'Lorem Ipsum sheet3 description',
        icon: 'browser-gauge',
      },
      sheet4: {
        title: 'Sheet4 title',
        description: 'Lorem Ipsum sheet4 description',
        icon: 'login-key',
      },
    },
  };
  public edit = () => {
    console.log('>>>>>> editing!!');
  }
}
