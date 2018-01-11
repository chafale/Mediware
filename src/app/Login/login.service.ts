import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    name : string;
    password : string;
        constructor() {
            console.log('Component service added');
            this.name = "admin";
            this.password = "admin";

         }

}