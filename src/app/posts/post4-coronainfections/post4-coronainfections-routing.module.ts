import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post4CoronainfectionsComponent } from './post4-coronainfections.component';


const routes: Routes = [
  {
    path: '',
    component: Post4CoronainfectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post4CoronainfectionsRoutingModule { }
