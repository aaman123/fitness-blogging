import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post5BalancedDietComponent } from './post5-balanced-diet.component';


const routes: Routes = [
  {
    path: '',
    component: Post5BalancedDietComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post5BalancedDietRoutingModule { }
