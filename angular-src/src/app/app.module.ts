import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { AlgorithmDetailComponent } from './algorithm-detail.component';
import { NavbarComponent } from './navbar.component';
import { AlgoService } from './algo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlgorithmDetailComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
    AlertModule.forRoot(),
    AppRoutingModule 
  ],
  providers: [AlgoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
