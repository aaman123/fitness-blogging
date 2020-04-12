import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm} from '@angular/forms';

declare var webkitSpeechRecognition;

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css'],
})
export class CalorieTrackerComponent implements OnInit {
  @ViewChild('f', { static: false} ) fform: NgForm;
  @ViewChild( 'gSearch', { static: false} ) formSearch;
  @ViewChild( 'searchKey', { static: false} ) hiddenSearchHandler;

  

  
  response: any = [];

  constructor(private http: HttpClient , private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.initEvent();
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
      this.http.get<any>(' https://api.edamam.com/api/food-database/parser' , {
        params: {
          'app_id': 'ad79b7a6',
          'app_key': '6cb626b2fdc0981097cf42cc3e5963c2',
          'ingr': value.name,
          
        }
     } ).subscribe( data => {
       this.response = data;
      //  this.insertData(this.response);
      if (this.response.hints.length) {
        this.response.hints.forEach(hint => {
          this.insertData(hint.food);
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

    
        const energy = data.nutrients.ENERC_KCAL ? `<li><b>Energy: </b><span>${data.nutrients.ENERC_KCAL.toFixed(1)}kcal</span></li>` : ''
        const carbs = data.nutrients.CHOCDF ? `<li><b>Carbs: </b><span>${data.nutrients.CHOCDF.toFixed(1)}g</span></li>` : ''
        const protein = data.nutrients.PROCNT ? `<li><b>Protein: </b><span>${data.nutrients.PROCNT.toFixed(1)}g</span></li>` : ''
        const fat = data.nutrients.FAT ? `<li><b>Fat: </b><span>${data.nutrients.FAT.toFixed(1)}g</span></li>` : ''
    
        const html = `
        <div class="card h-70">
          <div class="card-header">
            <h3 style='font-family:futura-pt'>${data.label}</h3>
            <h4 style='font-family:futura-pt'>${data.category}</h4>
          </div>
          <div class="card-body">
            <ul>
              ${energy}
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

  resetInput(input) {
    setTimeout( () => {
      this.changeInput( input, ' placeholder' , 'Search for a food or meal.') 
    }, 3000)
  }

  changeInput(input , prop , value) {
    input[prop] = value;
  }



  // voiceSearch() {
  //   if ('webkitSpeechRecognition' in window) {

  //     var recognition = new webkitSpeechRecognition();

  //     recognition.continuous = false;
  //     recognition.interimResults = false;
      

  //     recognition.lang = "en-US";
  //     recognition.start();

  //     const voiceSearchForm = this.formSearch.nativeElement;
  //     const voiceHandler = this.hiddenSearchHandler.nativeElement;
  //     recognition.onresult = function(e) {
        
  //       voiceHandler.value = e.results[0][0].transcript;
  //       recognition.stop();
  //       voiceSearchForm.submit();
  //     };

  //     recognition.onerror = function(e) {
  //       recognition.stop();
  //     }

  //   }
  // }
}