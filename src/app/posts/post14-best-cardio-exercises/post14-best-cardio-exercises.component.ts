import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post14-best-cardio-exercises',
  templateUrl: './post14-best-cardio-exercises.component.html',
  styleUrls: ['./post14-best-cardio-exercises.component.css']
})
export class Post14BestCardioExercisesComponent implements OnInit {

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
