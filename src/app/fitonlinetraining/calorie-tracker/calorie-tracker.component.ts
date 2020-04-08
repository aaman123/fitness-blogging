import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css']
})
export class CalorieTrackerComponent implements OnInit {
  // @ViewChild('f') fform: NgForm;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  onSubmit( form: NgForm){
    const value = form.value;
    let headers = new HttpHeaders();
    headers = headers.append('x-app-id','1a82537a');
    headers = headers.append('x-app-key' , '96817b2340f147abd0fa87ba1ee1844f');
    //console.log(value.name);
    if( value.name  !== null && value.name != ''){
      this.http.get(' https://trackapi.nutritionix.com/v2/search/instant?query=apple' , {
        headers: {
          'x-app-id': '1a82537a',
          'x-app-key': '96817b2340f147abd0fa87ba1ee1844f'
        }
     } ).subscribe( (data:any) => {
        console.log(data);
      })
      }
    }
  }


