import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post13ElleahMorganComponent } from './post13-elleah-morgan.component';

const routes: Routes = [{ path: '', component: Post13ElleahMorganComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post13ElleahMorganRoutingModule { }
