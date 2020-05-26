import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})


export class BMICalculatorComponent implements OnInit {

  HeightImperial;
  HeightMetric;
  BMIImperial;
  BMIMetric;
  weight_imperial = 140;
  feet_imperial = 5;
  inches_imperial = 9;
  units = "imperial";
  bmi_imperial = 0;
  bmi_metric = 0;
  weight_metric = 65;
  height_metric = 170;

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

  convertHeight(feet_imperial,inches_imperial) {
    var convertedHeight = (feet_imperial*12)+inches_imperial;
    this.HeightImperial = convertedHeight;  /*<------------------------must define as scope variable*/
     return convertedHeight;
  }

  calcBMI(HeightImperial,weight_imperial) {
    var bmi=((weight_imperial/Math.pow(HeightImperial,2))*703);
        this.BMIImperial=bmi;
    return bmi.toFixed(2);
  }

  convertcm(height_metric){
    var convertedHeightIntoMetre = (height_metric/100);
    this.HeightMetric = convertedHeightIntoMetre;
    return convertedHeightIntoMetre;
  }

  calcBMIMetric(HeightMetric,weight_metric) {
    var bmi1 = ((weight_metric/Math.pow(HeightMetric,2)));
    this.BMIMetric = bmi1;
    return bmi1.toFixed(2);
  }

  categorizeImperial(HeightImperial, weight_imperial){
    var bmi=((weight_imperial/Math.pow(HeightImperial,2))*703);
   var category;
    if(bmi>30){
      category="obese";
  } else if(bmi>25 && bmi<29.99) {
   category="overweight";
  }else if(bmi>18.5 && bmi<24.99) {
   category="healthy";
  }else if(bmi<18.5) {
   category="underweight";
  };
    return category;
  }

  categorizeMetric(HeightMetric,weight_metric){
    var bmi1=((weight_metric/Math.pow(HeightMetric,2)));
   var category;
   var description;
    if(bmi1>30){
      category="obese";
  } else if(bmi1>25 && bmi1<29.99) {
   category="overweight";
  }else if(bmi1>18.5 && bmi1<24.99) {
   category="healthy";
  }else if(bmi1<18.5) {
   category="underweight";
  };
    return category;
    return description;
  }

  private selectedLink: string="Imperial";

  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  

}
