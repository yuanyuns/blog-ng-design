import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutDefaultComponent} from '../layout/default/default.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
        data: { title: '主页' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
