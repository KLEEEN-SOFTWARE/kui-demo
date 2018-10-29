import { Component, OnInit } from '@angular/core';
import { ColumnDef, RowDef, QuickFilterConfig } from '@kleeen/components';
import { Observable, of } from 'rxjs';

const columns = [
  { id: 'ip', label: 'ip', order: 0 },
  { id: 'name', label: 'name', order: 1 },
  { id: 'country', label: 'country', order: 2 },
  { id: 'lastUpdate', label: 'Last Update', order: 3 },
  { id: 'user', label: 'user', order: 4 },
  { id: 'email', label: 'email', order: 5 },
  { id: 'company', label: 'company', order: 6 },
];

const rows = [
  {
    id: '0',
    ip: '196.255.183.172',
    name: 'Muhammad Larson',
    country: 'Montserrat',
    lastUpdate: '2018-10-27T11:28:03.194Z',
    user: 'Kayley Sawayn',
    email: 'Thelma.Harber66@yahoo.com',
    company: 'Ward and Sons'
  },
  {
    id: '1',
    ip: '102.24.90.52',
    name: 'Sibyl Stamm',
    country: 'Netherlands Antilles',
    lastUpdate: '2018-02-03T05:26:10.786Z',
    user: 'Mr. Wilmer Williamson',
    email: 'Katrina.Medhurst@gmail.com',
    company: 'Pagac - Oberbrunner'
  },
  {
    id: '2',
    ip: '161.70.31.243',
    name: 'Connor Weimann',
    country: 'Kenya',
    lastUpdate: '2018-06-20T16:09:36.824Z',
    user: 'Kolby Carter',
    email: 'Flavie48@yahoo.com',
    company: 'Mitchell - Hoppe'
  },
  {
    id: '3',
    ip: '217.199.4.145',
    name: 'Aidan Kunze',
    country: 'Bahamas',
    lastUpdate: '2018-10-27T03:18:58.027Z',
    user: 'Ms. Dock Harber',
    email: 'Nicole_Lubowitz40@gmail.com',
    company: 'Schultz, Von and Quigley'
  },
  {
    id: '4',
    ip: '49.30.10.247',
    name: 'Riley Cruickshank',
    country: 'Puerto Rico',
    lastUpdate: '2018-10-27T03:12:41.104Z',
    user: 'Dr. Zane Kulas',
    email: 'Annalise_Ortiz@gmail.com',
    company: 'Will, Kulas and McDermott'
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
