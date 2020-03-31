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

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ObsessedWithFitness';
  
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
