import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlgoService } from './algorithms/algo.service';
import { AlgorithmsComponent } from './algorithms/algorithms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlgorithmDetailComponent,
    NavbarComponent,
    AlgorithmsComponent
    
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
