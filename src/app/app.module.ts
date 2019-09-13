import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDecimalComponent } from './components/input-decimal/input-decimal.component';
import {NgxMaskModule, IConfig, } from 'ngx-mask';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatAutocompleteModule, MatOptionModule, MatSelectModule, MatRadioModule} from '@angular/material';
import { DatatableComponent } from './components/exemplos/datatable/datatable.component';
import { SelectComponent } from './components/exemplos/select/select.component';
import { ComboboxComponent } from './components/exemplos/combobox/combobox.component';
import { RadiobuttonComponent } from './components/exemplos/radiobutton/radiobutton.component';


@NgModule({
  declarations: [
    AppComponent,
    InputDecimalComponent,
    DatatableComponent,
    SelectComponent,
    ComboboxComponent,
    RadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
