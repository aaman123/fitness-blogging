import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post6-broscience-busted',
  templateUrl: './post6-broscience-busted.component.html',
  styleUrls: ['./post6-broscience-busted.component.css']
})
export class Post6BroscienceBustedComponent implements OnInit {

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
