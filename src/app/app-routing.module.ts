import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDecimalComponent } from './components/input-decimal/input-decimal.component';
import { SelectComponent } from './components/exemplos/select/select.component';
import { ComboboxComponent } from './components/exemplos/combobox/combobox.component';
import { RadiobuttonComponent } from './components/exemplos/radiobutton/radiobutton.component';


const routes: Routes = [
  {path: 'decimal', component: InputDecimalComponent},
  {path: 'select', component: SelectComponent},
  {path: 'combobox', component: ComboboxComponent},
  {path: 'radio', component: RadiobuttonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
