import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { Row } from './row';

@Component({
  selector: 'app-table',
  template: `
  <app-row *ngFor="let row of rowList" [row]="row" (entryUpdate)="onEntryUpdated($event)" (onRemove)="onDeleteRow($event)"></app-row>
  <button type="button" class="btn btn-xs btn-fill btn-success" (click)="onAddNew()"><i class="ti-plus"></i> Add New</button>
    `,
  styles: [`h1 { font-family: Lato; }`]
})
export class TableComponent {
  rowId: number = 0;
  rowList: Row[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.rowList = [];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  onEntryUpdated(data) {
    console.log(data);
  }

  onDeleteRow(row: Row) {
    this.rowList = this.rowList.filter(rowObj => rowObj.id !== row.id);
  }

  onAddNew() {
    this.rowId++;

    this.rowList.push(
      {
        id: this.rowId,
        date: '',
        start_time: 0,
        finish_time: 0,
        installer: '',
        duration: 0
      }
    );
  }

}
