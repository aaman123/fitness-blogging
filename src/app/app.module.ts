import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { Post1BeginnersComponent } from './posts/post1-beginners/post1-beginners.component';
import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';
import { Post3ExerciseBeginnersComponent } from './posts/post3-exercise-beginners/post3-exercise-beginners.component';
import { Post4CoronainfectionsComponent } from './posts/post4-coronainfections/post4-coronainfections.component';
import { Newsletter2Component } from '../app/layouts/newsletter2/newsletter2.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AboutComponent } from './layouts/about/about.component';
import { FitonlinetrainingComponent } from './fitonlinetraining/fitonlinetraining.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    Post1BeginnersComponent,
    Post2SupplementsForBeginnersComponent,
    Post3ExerciseBeginnersComponent,
    Post4CoronainfectionsComponent,
    NewsletterComponent,
    Newsletter2Component,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    FitonlinetrainingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
