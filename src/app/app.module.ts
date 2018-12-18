import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    WjGridModule,
    WjChartModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
