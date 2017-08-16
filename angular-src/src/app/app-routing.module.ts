import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AlgorithmDetailComponent } from './algorithm-detail.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'algorithm/:id', component: AlgorithmDetailComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }