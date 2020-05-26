import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  @ViewChild('f', { static: false} ) fform: NgForm;

  response: any = [];

  constructor( private http: HttpClient , private cdr: ChangeDetectorRef ) { }

  ngOnInit() {
    this.initEvent();

    const targets = document.querySelectorAll('img');
    this.initEvent();
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

  initEvent() {
    document.querySelector('#search').addEventListener('submit' , function(e){
      e.preventDefault()
      if (e.target[0].value){
        const chika = document.getElementById('bale');
        chika.innerHTML = ''
      }
    },false)

    
    }


  onSubmit( form: NgForm){
    const value = form.value;
    // let headers = new HttpHeaders();
    // headers = headers.append('x-app-id','1a82537a');
    // headers = headers.append('x-app-key' , '96817b2340f147abd0fa87ba1ee1844f');
    //console.log(value.name);
      return this.http.get<any>('https://api.edamam.com/search' , {
        params: {
          'app_id': '4e89b550',
          'app_key': 'cd1c866b0c4fa8f1b468b3b415e91397',
          'q': value.name,
          
        }
     } ).subscribe( data => {
       this.response = data;
      //  this.insertData(this.response);
      if (this.response.hits.length) {
        this.response.hits.forEach(hit => {
          this.insertData(hit);
          this.fform.reset();
        })
      }


       

     })
    
  }

  insertData(data) {
    const chika = document.getElementById('bale');
    chika.insertAdjacentHTML('beforeend',  this.showData(data));
    console.log(data);
  }

  showData( data) {

    const ingredients = data.recipe.ingredientLines ? `
    
    <p style='font-family:futura-pt'> <b>Ingredients: </b> <span>${data.recipe.ingredientLines}</span> <p>`: ''
    const calories = data.recipe.calories ? `<li><b>Energy: </b><span>${data.recipe.calories.toFixed(3)}kcal</span></li>` : ''
    const carbs = data.recipe.totalNutrients.CHOCDF.quantity ? `<li><b>Carbs: </b><span>${data.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}g</span></li>` : ''
    const protein = data.recipe.totalNutrients.PROCNT.quantity ? `<li><b>Protein: </b><span>${data.recipe.totalNutrients.PROCNT.quantity.toFixed(1)}g</span></li>` : ''
    const fat = data.recipe.totalNutrients.FAT.quantity ? `<li><b>Fat: </b><span>${data.recipe.totalNutrients.FAT.quantity.toFixed(1)}g</span></li>` : ''

    const html = `
    <div class="card h-70">

    <img class='img-fluid' src=${data.recipe.image} alt='fsf'/>

      <div class="card-header">
        <h3 style='font-family:futura-pt'>${data.recipe.label}</h3>
      </div>
      <div class="card-body">
      <ul  class="list-group list-group-flsuh">
        <li  class="list-group-item">
        ${ingredients}
        </li>
      </ul>
      
      <br/>
        <ul>
          
          ${calories}
          ${carbs}
          ${protein}
          ${fat}
        </ul>
      </div>
      <div class="card-footer">
        <p><b>Brand: </b><span>${data.brand || 'None :('}</span></p>
      </div>
    </div>
    `
   console.log(data);
    return html



}



}
