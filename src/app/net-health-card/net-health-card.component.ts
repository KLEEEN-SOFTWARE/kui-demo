import { Component } from '@angular/core';
import { KuiCardModel, KuiCardTemplate } from '@kleeen/dashboard';

@Component({
  selector: 'app-net-health',
  template: `
  <ng-template #banner>
    <div class="banner">Net health banner</div>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
  </ng-template>
 
  <ng-template #cards>
    <div>Net health card</div>
    </ng-template>
 
  <ng-template #sheet1>
    <div>Net health sheet 1</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </ng-template>
    
    <ng-template #sheet2>
    <div>Net health sheet 2</div>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
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
  public data = this.generateData();
  public events = [];
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
  public getSeverity = (value) => {
    if (value < 20) {
      return 'critical';
    }
    if (value < 40) {
      return 'high';
    }
    if (value < 60) {
      return 'medium';
    }
    if (value < 80) {
      return 'low';
    }
    return 'ok';
  }
  public getSparklineConfig = (severity) => {
    return {
      color: [
        `var(--color--severity-${severity})`,
        `var(--color--severity-${severity})`,
      ],
      height: 45,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 5,
      opacity: .40,
      width: 230,
    };
  }
  private generateData() {
    return [
      { date: '2018/10/30', value: (Math.random() * 100) + 1 },
      { date: '2018/10/29', value: (Math.random() * 100) + 1 },
      { date: '2018/10/28', value: 100 },
      { date: '2018/10/27', value: (Math.random() * 100) + 1 },
      { date: '2018/10/26', value: (Math.random() * 100) + 1 },
      { date: '2018/10/23', value: (Math.random() * 100) + 1 },
      { date: '2018/10/22', value: (Math.random() * 100) + 1 },
    ];
  }
}
