import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '../shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatGridListModule
  ]
})
export class RoutesModule { }
