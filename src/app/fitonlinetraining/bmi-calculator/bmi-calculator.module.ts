import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BMICalculatorRoutingModule } from './bmi-calculator-routing.module';
import { BMICalculatorComponent } from './bmi-calculator.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [BMICalculatorComponent],
  imports: [
    CommonModule,
    BMICalculatorRoutingModule,
    FormsModule
  ]
})
export class BMICalculatorModule { }
