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
import { TagsComponent } from './tags/tags.component';
import {MatChipsModule} from '@angular/material/chips';
import { AboutComponent } from './about/about.component';
import { ArticleBodyComponent } from './index/article-body/article-body.component';
import {MarkdownModule} from 'ngx-markdown';



@NgModule({
  declarations: [
    IndexComponent,
    ArticleComponent,
    TagsComponent,
    AboutComponent,
    ArticleBodyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatChipsModule,
    MarkdownModule.forRoot()
  ]
})
export class RoutesModule { }
