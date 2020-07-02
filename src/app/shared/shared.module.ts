import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [ArticleCardComponent],
  exports: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class SharedModule { }
