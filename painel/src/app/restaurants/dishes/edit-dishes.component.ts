import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-dishes',
    templateUrl: './edit-dishes.component.html'
})
export class EditDishesComponent implements OnInit{

    constructor(
        private router: Router
    ){}

    ngOnInit() {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');
    }
}