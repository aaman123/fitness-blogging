import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post2SupplementsForBeginnersComponent } from './post2-supplements-for-beginners.component';


const routes: Routes = [
  {
    path: '',
    component: Post2SupplementsForBeginnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post2SupplementsForBeginnersRoutingModule { }
