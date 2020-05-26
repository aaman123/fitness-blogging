import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BMICalculatorComponent } from './bmi-calculator.component';

const routes: Routes = [{ path: '', component: BMICalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BMICalculatorRoutingModule { }
