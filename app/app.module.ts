import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DatePicker } from './datepicker';
import { DatePickerInner } from './datepicker-container';
import { DayPicker } from './daypicker';
import { MonthPicker } from './monthpicker';
import { YearPicker } from './yearpicker';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
    DatePickerInner,
    DatePicker,
    DayPicker,
    MonthPicker,
    YearPicker,
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
