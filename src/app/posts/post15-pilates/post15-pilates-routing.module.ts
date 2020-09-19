import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post15PilatesComponent } from './post15-pilates.component';

const routes: Routes = [{ path: '', component: Post15PilatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post15PilatesRoutingModule { }
