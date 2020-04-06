import { Routes } from '@angular/router';

import { TrainersComponent } from '../../trainers/trainers.component';
import { WorkoutsComponent } from '../../workouts/workouts.component';

export const AdminRoutes: Routes  = [
    {
        path: 'trainers' , 
        component: TrainersComponent
    },
    {
        path: 'workouts',
        component: WorkoutsComponent
    },
    
]