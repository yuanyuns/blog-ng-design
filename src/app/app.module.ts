import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RoutesRoutingModule} from './routes/routes-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RoutesModule} from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    LayoutModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
