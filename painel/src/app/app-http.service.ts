import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class AppHttpService{
    protected url: string;
    private header: HttpHeaders;

    constructor(protected http: HttpClient){
        this.setAccessToken()
    }

    getUser(){
        return this.builder('auth/me')
            .list()
    }

    setAccessToken(){
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU5M2Y2YjQyNjAwZWY5MzVjM2ZmYjZkOGY2YjkwNGI0YjAzM2VjODk1M2I3ZWU1NTJlZjhjMWQ3MmMxOGZkZjlhMDQ1NmQ0MjA1OGI4MTdmIn0.eyJhdWQiOiI0IiwianRpIjoiZTkzZjZiNDI2MDBlZjkzNWMzZmZiNmQ4ZjZiOTA0YjRiMDMzZWM4OTUzYjdlZTU1MmVmOGMxZDcyYzE4ZmRmOWEwNDU2ZDQyMDU4YjgxN2YiLCJpYXQiOjE1NDgzNzk3ODMsIm5iZiI6MTU0ODM3OTc4MywiZXhwIjoxNTc5OTE1NzgzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.7rdKV6N1A2Ng1HgQrysD9sBeIq3tJ7ew87AYR918lqIhdD9sENoJqpQFnFp_eP08_50Fgq5Y0FqW8gxCou_DxRdSLysMQDNTNjtT05J8pC66sZ0DZ6Yg3tM0F68q5sDuOx0WFoVEv6ZRkGvdU2DEyOVtLv00gJkcSEexshDCAc8Hzf-d5rgYlqxQ5CfiJg5Aoio5sA96ljENmXzewhkGBbT_XxlPB8BqbRsUFv08GYS5y1WJ6vWZFH2nW5sAE85Rhvqssm-91VTnRntkBb7-vrnf70x4wxTKpy30PLoQt-PFZOawq6cXM4cJw2k4mfrOez9z5q7rGemu8R4uCmmN-NJqr2dFNKmV1fd8N3sGFrEn8rcrxPHTNrsOCmAZkGKCBmHxdS4RTJ1sZnrm964On5GQnh1ez7oB-QSrJNmU-5ad-XO20Wx7o5QlBSOHlvTvjjYjSv8lSp9Y2bMwwMPxlQgibYnrem0v1A3_DieVJT57kShzW2gB5QjPl55n1_fZKs6ava_yPKRwlyeEopR4Bncz9ge-oi65CqGx_dqL4br_h-XZWrG6sK7G8GE3XiOdUr1oeZ9mNURPtsTpbuXOZA6FmYgvmu3AjnMIMs9TQKFMbnChE4C3kbZq-9CNPSr_GQN-TpxLyiRemaGwO0qerJyLMbOOJMyoXW8AZC_mrC8'
        this.header = new HttpHeaders({'Authorization': 'Bearer ' + token});
    }

    builder(resource: string){
        this.url = environment.server_url +  '/api/v1/' + resource;
        return this;

    }
    list (options: Object = {}){
        return this.http.get(this.url, {headers: this.header})
            .toPromise()
            .then((res: Response) => {
                return res.json() || {};
            })
    }
    view (id: number){
        return this.http.get(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res: Response) => {
                return res.json() || {};
            })
    }

}