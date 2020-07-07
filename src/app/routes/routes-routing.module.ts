import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutDefaultComponent} from '../layout/default/default.component';
import {IndexComponent} from './index/index.component';
import {ArticleComponent} from './article/article.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
