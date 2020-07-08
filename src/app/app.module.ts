import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RoutesRoutingModule} from './routes/routes-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {RoutesModule} from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    LayoutModule,
    SharedModule,
    RoutesModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
