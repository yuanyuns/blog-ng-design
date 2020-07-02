import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutDefaultComponent} from './default/default.component';
import {RoutesRoutingModule} from '../routes/routes-routing.module';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LayoutDefaultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
