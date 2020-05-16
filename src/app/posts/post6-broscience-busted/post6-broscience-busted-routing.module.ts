import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post6BroscienceBustedComponent } from './post6-broscience-busted.component';


const routes: Routes = [
  {
    path: '',
    component: Post6BroscienceBustedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post6BroscienceBustedRoutingModule { }
