import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rowData: any = [];
  columnDefs: any = [];
  gridApi: any;
  gridColumnApi: any;

  ngOnInit() {
    this.columnDefs.push({
      headerName: 'Date',
      field: 'datecustom',
      filter: 'agDateColumnFilter',
      width: 150,
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    });

    this.rowData = [
      { datecustom: new Date('2017-10-03T12:18:55') },
      {datecustom: new Date('2017-10-01 16:53:04')},
      {datecustom: new Date('2017-09-27 13:39:47')},
      {datecustom: new Date('2016-01-26 13:39:47')},
      {datecustom: new Date('2016-03-23 13:39:47')},
      {datecustom: new Date('2015-02-26 08:24:48')},
      {datecustom: new Date('2015-08-21 08:24:48')}
    ];
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
