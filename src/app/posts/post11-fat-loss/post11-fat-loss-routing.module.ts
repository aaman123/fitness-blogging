import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post11FatLossComponent } from './post11-fat-loss.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


const routes: Routes = [
  {
    path: '',
    component: Post11FatLossComponent,
    children: [
      {
        path: '',
        loadChildren: () =>  import('../../layouts/footer/footer.module').then(m => m.FooterModule)
      },
      {
        path: '',
        loadChildren: () => import('../../layouts/sidebar/sidebar.module').then(m => m.SidebarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post11FatLossRoutingModule { }
