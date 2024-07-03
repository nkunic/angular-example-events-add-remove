import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Row } from './row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class RowComponent {
  @Output() entryUpdate = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<Row>();

  @Input() row: Row;

  constructor() {
  }

  ngOnInit() {
  }

  onLastInputChange() {
    this.entryUpdate.emit(this.row);
  }

  onRemoveRow(row: Row): void {
    this.onRemove.emit(row);
  }
}
