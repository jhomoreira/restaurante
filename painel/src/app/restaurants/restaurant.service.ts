import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {AppHttpService} from "../app-http.service";

@Injectable()
export class RestaurantService extends AppHttpService{
    protected url: string;

    builder(resource: string =''){
        return super.builder('restaurants' + resource);
        //super usa os atributos de outra classe em uma classe de mesmo nome
    }


}
