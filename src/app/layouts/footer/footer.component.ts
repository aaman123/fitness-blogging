import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mySlideImages = ['../../../assets/img/body.webp','../../../assets/img/arms1.webp','../../../assets/img/abs1.webp'];
  myCarouselImages =['../../../assets/img/body.webp','../../../assets/img/arms1.webp','../../../assets/img/abs1.webp'];

  mySlideOptions={ dots: true, nav: false , autoplay:true, autoplayTimeout: 5000, autoplayHoverPause:true  ,  center:true, loop:true, margin: 10,     responsive:{
    0:{
        items:1
    },
    600: {
      items: 2
    },
    1000: {
      items: 5,
    }
}
};
  myCarouselOptions={items: 3, dots: true, nav: true};


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
