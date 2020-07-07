import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component';
import {SharedModule} from '../shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArticleComponent } from './article/article.component';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    IndexComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule
  ]
})
export class RoutesModule { }
