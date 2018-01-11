import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class LoginService {
    name : string;
    password : string;
    address : string;
        constructor(private httpClient : HttpClient) {
            console.log('Component service added');
            this.name = "admin";
            this.password = "admin";
            this.address = localStorage.getItem('address');

         }

         getCred() : Observable<any>{
             console.log("Link is " );
           
            console.log(this.address);
           return this.httpClient.get(this.address+'/users');
        }

}