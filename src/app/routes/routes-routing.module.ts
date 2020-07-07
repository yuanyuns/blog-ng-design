import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutDefaultComponent} from '../layout/default/default.component';
import {IndexComponent} from './index/index.component';
import {ArticleComponent} from './article/article.component';
import {TagsComponent} from './tags/tags.component';
import {AboutComponent} from './about/about.component';
import {ArticleBodyComponent} from './index/article-body/article-body.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
        data: { title: '主页' },
      },
      {
        path: 'article',
        component: ArticleComponent,
        data: { title: '归档' },
      },
      {
        path: 'tags',
        component: TagsComponent,
        data: { title: '归档' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: '归档' },
      },
      {
        path: 'blog/:id',
        component: ArticleBodyComponent,
        data: { title: '归档' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
