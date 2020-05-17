import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post10-muscle-gain-time',
  templateUrl: './post10-muscle-gain-time.component.html',
  styleUrls: ['./post10-muscle-gain-time.component.css']
})
export class Post10MuscleGainTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const targets = document.querySelectorAll('img');

    const lazyload = target => {
      const io = new IntersectionObserver((entries , observer) => {

        entries.forEach( entry => {
          console.log('chika');

          if(entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-lazy');

            img.setAttribute('src',src);

            observer.disconnect();
          }

        })
      });

      io.observe(target);
    };

    targets.forEach(lazyload);
    
  }

}
