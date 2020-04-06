import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router'

import { trigger , useAnimation , transition } from '@angular/animations';
import { rotateCubeToLeft } from 'ngx-router-animations';
import { slideInAnimation } from './route-animation';

declare var gtag;

@Component({
  selector: 'app-root',
  animations: [ // <-- add your animations here
    // trigger('rotateCubeToLeft',  [ transition('* => About', useAnimation(rotateCubeToLeft))])
    slideInAnimation
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'ObsessedWithFitness';
  getState(outlet)  {
		return outlet.activatedRouteData.state;
	}

  
  constructor(private router:Router) {
 
     const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )

    navEndEvents.subscribe( (event: NavigationEnd)=> {
      gtag('config', 'UA-160064411-1' ,{
      'page_path': event.urlAfterRedirects
    });
 }) 
}
}
