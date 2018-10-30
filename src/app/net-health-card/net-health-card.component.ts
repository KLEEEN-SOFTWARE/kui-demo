import { Component } from '@angular/core';
import { KuiCardTemplate, KuiCardModel } from '@kleeen/dashboard';

@Component({
  selector: 'app-net-health-card',
  template: `
    <ng-template #banner>
    <div class="banner">{{'DASHBOARD.CARD' | translate}}</div>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
  </ng-template>

  <ng-template #card>
    <br>
    <p>{{data[0].label}}</p>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <br>
    <p>{{data[1].label}}</p>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[1].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <br>
    <p>{{data[2].label}}</p>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[2].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <br>
    <p>{{data[3].label}}</p>
    <kui-sparkline
      [kvConfig]="getSparklineConfig(getSeverity(data[3].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
    <br>
  </ng-template>

  <ng-template #sheet1>
    <div class="title">{{'DASHBOARD.CARD' | translate}}</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <kui-sparkline
      [kvConfig]="getSparklineSheetConfig(getSeverity(data[0].value))"
      [kvData]="data"
      [kvEvents]="events">
    </kui-sparkline>
  </ng-template>

  <ng-template #sheet2>
    <div>{{'DASHBOARD.CARD' | translate}} sheet 2</div>
  </ng-template>

  <ng-template #sheet3>
    <div>{{'DASHBOARD.CARD' | translate}} sheet 3</div>
  </ng-template>

  <ng-template #sheet4>
    <div>{{'DASHBOARD.CARD' | translate}} sheet 4</div>
  </ng-template>

  <ng-template #fullscreen>
    <div>{{'DASHBOARD.CARD' | translate}} fullscreen</div>
  </ng-template>
  `,
  styles: ['div, p  { padding: 1rem 2rem 0 2rem; font-size: 1.6rem;}', '.title { padding-top: 2rem; padding-bottom: 1rem; }']
})
export class NetHealthCardComponent extends KuiCardTemplate {

  public data = this.generateData();
  public events = [];
  public config: KuiCardModel = {
    card: {
      title: 'Net Card',
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
      height: 35,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5,
      opacity: .40,
      width: 230,
    };
  }

  public getSparklineSheetConfig = (severity) => {
    const config = this.getSparklineConfig(severity);
    return { ...config, height: 180, width: 770, marginTop: 50 };
  }

  private generateData() {
    return [
      { date: '2018/10/30', value: (Math.random() * 100) + 1, label: 'San Jose' },
      { date: '2018/10/29', value: (Math.random() * 100) + 1, label: 'New York' },
      { date: '2018/10/28', value: 100, label: 'Dallas' },
      { date: '2018/10/27', value: (Math.random() * 100) + 1, label: 'Houston' },
      { date: '2018/10/26', value: (Math.random() * 100) + 1, label: 'Los Angeles' },
      { date: '2018/10/25', value: (Math.random() * 100) + 1, label: 'San Antonio' },
      { date: '2018/10/24', value: (Math.random() * 100) + 1, label: 'San Diego' },
    ];
  }
}
