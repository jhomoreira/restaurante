import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from './dashboard.component';
import { EvaluationComponent } from './dashboard/evaluation.component';

import { DishesComponent } from './dishes.component';
import { EditDishesComponent } from './dishes/edit-dishes.component';
import { NewDishesComponent } from './dishes/new-dishes.component';
import { EditComponent } from './edit.component';
import { PasswordComponent } from './password.component';
import { ProfileComponent } from './profile.component';

import { RestaurantService } from './restaurant.service';

import 'materialize-css';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'evaluation/:id', component: EvaluationComponent}
        ]
    },
    { path: 'dishes', component: DishesComponent,
        children: [
            { path: 'new', component: NewDishesComponent },
            { path: 'edit/:id', component: EditDishesComponent },
        ]
    },
    { path: 'edit', component: EditComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        EditDishesComponent,
        NewDishesComponent,
        EditComponent,
        PasswordComponent,
        ProfileComponent
    ],
    providers: [
        RestaurantService
    ]
})

export class RestaurantModule{

}