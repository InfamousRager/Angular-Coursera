import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list' // adicionei pra parar de dar um erro que nao reconhecia o material list como component
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';


import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Promotion } from './shared/promotion';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule, // adicionei pra parar de dar um erro que nao reconhecia o material list como component
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    
  ],
  providers: [DishService,
  PromotionService,
  LeaderService,
],
entryComponents: [
  LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
