import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post8FitCollegeStudentComponent } from './post8-fit-college-student.component';


const routes: Routes = [
  {
    path: '',
    component: Post8FitCollegeStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post8FitCollegeStudentRoutingModule { }
