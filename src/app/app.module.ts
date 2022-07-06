import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list' // adicionei pra parar de dar um erro que nao reconhecia o material list como component


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';


import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule, // adicionei pra parar de dar um erro que nao reconhecia o material list como component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
