import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'algorithm/:url', component: AlgorithmDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }