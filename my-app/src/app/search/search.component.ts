import { Component, OnInit } from '@angular/core';

export interface ZaibanElement {
  kouji_no: string;
  fugou: string;
  zaiban: string;
  hinmei: string;
  ren: boolean;
  ten: string;
}

const ZAIBAN_DATA: ZaibanElement[] = [
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: true, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
  {kouji_no: 'FL99-9999-9', fugou: '001-000', zaiban: '99D9999-01-001-001', hinmei: 'PB ROLL　　　　　　　　　。', ren: false, ten: 'odr18_00001'},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // displayedColumns: string[] = ['kouji_no', 'fugou', 'zaiban', 'hinmei'];
  dataSource = ZAIBAN_DATA;

  constructor() { }

  ngOnInit() {
  }

}
