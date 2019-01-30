import { Component, OnInit } from '@angular/core';
import { AppHttpService } from "../app-http.service";
import { RestaurantService} from "./restaurant.service";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit{

    dragging: boolean = false;
    restaurant: Object = false;

    constructor(
        protected appHttpService: AppHttpService,
        protected httpService: RestaurantService
    ){}

    ngOnInit(){
        this.appHttpService.getUser()
            .then((res) => {
                console.log(res);
                let id = res.restaurant.id;
                this.httpService.builder()
                    .view(id)
                    .then((res) => {
                        this.restaurant = res;
                        window.Materialize.updateTextFields()
                    })
            });
    }

    upload(e){
        e.preventDefault();
        console.log(e.dataTransfer.files)
    }

    dragover(e){
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }
}