import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutDefaultComponent} from './default/default.component';
import {RoutesRoutingModule} from '../routes/routes-routing.module';



@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class LayoutModule { }
