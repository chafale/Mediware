

import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="background: url('/assets/img/greenbg.jpg');text-align:center;">
            <h3 style="color: #545454 ;text-align:center; font-weight: bold;">Welcome</h3>
            <img src="/assets/img/mediware-logo.png" alt="" style="width:200px;">
            <div class="modal-body" style="height:230px;padding-top: 0;">
                <div class="col-sm-4 loginform" style="width:400px;">
                    <form style="text-align: center !important;">
                        <div class="form-group">
                            <!-- <label for="exampleInputEmail1">Email address</label> -->
                             <input type="email" [ngModelOptions]="{standalone: true}" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" autocomplete="off" [(ngModel)]="email">
                            
                        </div>
                        <div class="form-group">
                            <!-- <label for="exampleInputPassword1">Password</label> -->
                            <input [ngModelOptions]="{standalone: true}" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" autocomplete="off" [(ngModel)]="password">
                        </div>
                        <hr>
                        <button (click)="authnticateCred();" class="btn btn-success" style="width:200px; background-color:rgb(58, 58, 58); color:white;border-radius:20px !important;box-shadow:0px 2px 5px rgba(70, 90, 29, 0.281);">Login</button>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    `, 
 
    styles : [`
    .form-group>input {
        border: 1px solid greenyellow;
        box-shadow: 0px 1px 1px green;
        border-radius: 20px;
    }
    .form-group>input:focus {
        border: 1px solid greenyellow;
        box-shadow: 0px 0px 1px greenyellow;
    }
    input::-webkit-input-placeholder {
        color: greenyellow !important;
    }
    input:-moz-placeholder {
        /* Firefox 18- */
        color: greenyellow !important;
    }
    input::-moz-placeholder {
        /* Firefox 19+ */
        color: greenyellow !important;
    }
    input:-ms-input-placeholder {
        color: greenyellow !important;
    }
    .loginform {
        background-color: #ffffff00;
        padding: 20px;
        font-weight: bold;
        border-radius: 15px;
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
    }
    `],
    providers : [LoginService]
})
export class LoginComponent implements OnInit {
    email : string;
    password : string;
    loginService : LoginService;
    constructor(loginService : LoginService) {
        console.log(loginService.name);
        this.loginService = loginService;
     }
     authnticateCred(){
        if(this.loginService.name === this.email && this.loginService.password === this.password){
            alert('Login Successful');
        }
        else{
            alert('Wrong admin creditential');
        }
     }
    ngOnInit() { 

    }

}