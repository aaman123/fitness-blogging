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
  showOverlay = false;

  constructor(private router:Router) {
    this.router.events.subscribe((event: Event) => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.showOverlay = true;
          console.log(event instanceof NavigationStart);
          break;
        }


        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
        case event instanceof NavigationCancel: {
          this.showOverlay = false;
          console.log(event instanceof NavigationEnd);
          break;
        }

        default: {
          break;
        }
      }
    })
    

  
  }

  // navstartsubscribe(event: NavigationStart): void {
  //   if (event instanceof NavigationStart){
  //     this.showOverlay = true;
  //   }
  // }

  // navendsubscribe(event: NavigationEnd): void {
  //   if (event instanceof NavigationEnd){
  //     this.showOverlay = false;
  //   }
  // }

}
