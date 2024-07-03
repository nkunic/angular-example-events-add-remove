import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table.component';
import { RowComponent } from './row.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TableComponent, RowComponent ],
  entryComponents: [RowComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
