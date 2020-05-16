import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Newsletter2Component } from './newsletter2.component';


const routes: Routes = [
  {
    path: '',
    component: Newsletter2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Newsletter2RoutingModule { }
