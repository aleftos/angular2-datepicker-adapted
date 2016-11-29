import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePicker } from './datepicker';

import {DatePickerInner} from './datepicker-container';
import {DayPicker} from './daypicker';
import {MonthPicker} from './monthpicker';
import {YearPicker} from './yearpicker';

@NgModule({
  declarations: [
    DatePicker,
    DatePickerInner,
    DayPicker,
    MonthPicker,
    YearPicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  exports: [
    DatePicker,
    DatePickerInner,
    DayPicker,
    MonthPicker,
    YearPicker
  ],
})
export class DatePickerModule { }


