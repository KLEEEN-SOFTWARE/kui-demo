import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColumnDef, RowDef, QuickFilterConfig, TableService } from '@kleeen/components';

const columns = [
  { id: 'company', label: 'company', order: 6 },
  { id: 'country', label: 'country', order: 2 },
  { id: 'consumptionKwh', label: 'consumption kwh', order: 1 },
  { id: 'forecastedKwh', label: 'forecasted Kwh', order: 4 },
  { id: 'lastUpdate', label: 'Last Update', order: 3 },
];

const rows = [
  {
    id: '0',
    company: 'Gislason and Sons',
    country: 'Thailand',
    consumptionKwh: '4359.97',
    forecastedKwh: '4006.04',
    lastUpdate: '2018-10-29T23:24:48.845Z'
  },
  {
    id: '1',
    company: 'King, Cremin and Will',
    country: 'Anguilla',
    consumptionKwh: '8889.58',
    forecastedKwh: '9877.43',
    lastUpdate: '2018-10-29T20:40:44.393Z'
  },
  {
    id: '2',
    company: 'Green, Kozey and Fisher',
    country: 'Maldives',
    consumptionKwh: '4212.58',
    forecastedKwh: '4808.66',
    lastUpdate: '2017-12-25T21:20:42.270Z'
  },
  {
    id: '3',
    company: 'Block, Miller and Swaniawski',
    country: 'Saint Lucia',
    consumptionKwh: '9244.41',
    forecastedKwh: '9389.12',
    lastUpdate: '2018-10-30T18:11:15.958Z'
  },
  {
    id: '4',
    company: 'Mraz and Sons',
    country: 'Mongolia',
    consumptionKwh: '4509.98',
    forecastedKwh: '7964.48',
    lastUpdate: '2018-10-30T07:08:33.426Z'
  },
  {
    id: '5',
    company: 'Little - Friesen',
    country: 'Palau',
    consumptionKwh: '5750.78',
    forecastedKwh: '6970.83',
    lastUpdate: '2018-02-03T09:16:10.160Z'
  },
  {
    id: '6',
    company: 'Schmidt and Sons',
    country: 'Botswana',
    consumptionKwh: '8529.73',
    forecastedKwh: '4432.18',
    lastUpdate: '2017-11-30T09:53:47.545Z'
  },
  {
    id: '7',
    company: 'Metz, Bogisich and Hauck',
    country: 'Madagascar',
    consumptionKwh: '8231.43',
    forecastedKwh: '9139.58',
    lastUpdate: '2018-10-30T15:16:57.857Z'
  },
  {
    id: '8',
    company: 'Bergstrom - Rempel',
    country: 'Seychelles',
    consumptionKwh: '5574.73',
    forecastedKwh: '6252.70',
    lastUpdate: '2018-03-08T21:41:33.665Z'
  },
  {
    id: '9',
    company: 'Cassin - King',
    country: 'Virgin Islands, U.S.',
    consumptionKwh: '4890.62',
    forecastedKwh: '7632.16',
    lastUpdate: '2018-05-25T20:45:09.406Z'
  },
  {
    id: '10',
    company: 'Hudson Group',
    country: 'Guam',
    consumptionKwh: '4608.56',
    forecastedKwh: '7312.21',
    lastUpdate: '2018-08-25T06:42:01.001Z'
  },
  {
    id: '11',
    company: 'Carter - Mosciski',
    country: 'Mayotte',
    consumptionKwh: '6326.94',
    forecastedKwh: '3700.85',
    lastUpdate: '2018-10-29T23:44:20.045Z'
  },
  {
    id: '12',
    company: 'Glover Inc',
    country: 'Netherlands',
    consumptionKwh: '6247.31',
    forecastedKwh: '7753.98',
    lastUpdate: '2017-12-04T14:31:02.149Z'
  },
  {
    id: '13',
    company: 'Mante, OKeefe and Abernathy',
    country: 'Marshall Islands',
    consumptionKwh: '6216.75',
    forecastedKwh: '9056.69',
    lastUpdate: '2018-03-02T02:05:53.621Z'
  },
  {
    id: '14',
    company: 'Ritchie - Hammes',
    country: 'New Zealand',
    consumptionKwh: '8686.22',
    forecastedKwh: '4660.04',
    lastUpdate: '2018-10-30T11:18:23.632Z'
  },
  {
    id: '15',
    company: 'Lind - Prohaska',
    country: 'Faroe Islands',
    consumptionKwh: '6767.84',
    forecastedKwh: '6482.44',
    lastUpdate: '2018-10-30T06:22:45.804Z'
  },
  {
    id: '16',
    company: 'Schimmel - Adams',
    country: 'Algeria',
    consumptionKwh: '5438.83',
    forecastedKwh: '7191.08',
    lastUpdate: '2018-07-20T08:11:23.823Z'
  },
  {
    id: '17',
    company: 'Jaskolski - Wehner',
    country: 'Portugal',
    consumptionKwh: '8005.21',
    forecastedKwh: '8773.14',
    lastUpdate: '2018-01-17T14:04:27.027Z'
  },
  {
    id: '18',
    company: 'Heller - Schneider',
    country: 'Cote dIvoire',
    consumptionKwh: '7835.20',
    forecastedKwh: '6107.80',
    lastUpdate: '2017-12-11T01:13:42.611Z'
  },
  {
    id: '19',
    company: 'Wehner, Kemmer and Davis',
    country: 'Uruguay',
    consumptionKwh: '9969.46',
    forecastedKwh: '3430.74',
    lastUpdate: '2017-11-25T21:32:25.736Z'
  },
  {
    id: '20',
    company: 'Wilderman Inc',
    country: 'Saint Pierre and Miquelon',
    consumptionKwh: '5741.95',
    forecastedKwh: '5524.23',
    lastUpdate: '2018-01-07T14:18:08.788Z'
  },
  {
    id: '21',
    company: 'Glover - Terry',
    country: 'Zimbabwe',
    consumptionKwh: '6614.03',
    forecastedKwh: '5613.25',
    lastUpdate: '2018-05-12T15:19:11.525Z'
  },
  {
    id: '22',
    company: 'Powlowski, OReilly and Hayes',
    country: 'Eritrea',
    consumptionKwh: '7028.35',
    forecastedKwh: '9569.43',
    lastUpdate: '2018-01-26T10:48:36.863Z'
  },
  {
    id: '23',
    company: 'Tromp and Sons',
    country: 'Kuwait',
    consumptionKwh: '9045.62',
    forecastedKwh: '7576.24',
    lastUpdate: '2018-10-30T08:09:54.389Z'
  },
  {
    id: '24',
    company: 'Cassin, Bailey and Hermann',
    country: 'Papua New Guinea',
    consumptionKwh: '4449.91',
    forecastedKwh: '4164.18',
    lastUpdate: '2018-06-06T23:34:02.564Z'
  },
  {
    id: '25',
    company: 'Terry, Weber and Schimmel',
    country: 'Virgin Islands, U.S.',
    consumptionKwh: '3992.97',
    forecastedKwh: '6442.03',
    lastUpdate: '2018-10-30T18:08:08.126Z'
  },
  {
    id: '26',
    company: 'McGlynn - Hilpert',
    country: 'United States Minor Outlying Islands',
    consumptionKwh: '6365.89',
    forecastedKwh: '5917.90',
    lastUpdate: '2018-10-30T11:27:17.177Z'
  },
  {
    id: '27',
    company: 'Mohr, Torp and Dickens',
    country: 'Swaziland',
    consumptionKwh: '6356.94',
    forecastedKwh: '4331.96',
    lastUpdate: '2018-07-13T17:44:24.685Z'
  },
  {
    id: '28',
    company: 'Casper, Crooks and Kreiger',
    country: 'Romania',
    consumptionKwh: '8491.42',
    forecastedKwh: '9000.16',
    lastUpdate: '2018-05-25T07:18:37.638Z'
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public columns: Observable<ColumnDef[]> = of(columns);
  public rows: Observable<RowDef[]> = of(rows);
  public quickFilterConfig: QuickFilterConfig = {
    actions: [
      { label: 'Sort row ascending', action: (columnId) => console.log },
      { label: 'Sort row descending', action: (columnId) => console.log },
    ],
    clearFilter: {
      label: 'Clear filter',
      action: (columnId) => console.log,
    },
    debounce: 300,
  };
  public tableName = 'demoTable';

  constructor(
    private tableService: TableService,
  ) { }

  public onHeaderFilter = (columnId: string, typedText: string) => {
    this.rows = of(rows.filter(row => row[columnId].indexOf(typedText) !== -1));
  }

  public onToggle = (id: string) => {
    this.tableService.toggleRow(this.tableName, id);
  }

  public onRemoveSelected () {
    this.tableService.hideSelectedRows(this.tableName);
  }

  public onShowSelected () {
    this.tableService.showOnlySelectedRows(this.tableName);
  }

  public onClearAll () {
    this.tableService.clearAll(this.tableName);
  }

  public onSelectAll () {
    this.tableService.selectAll(this.tableName);
  }
}
