import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DiseasesService {
    address : string;


    constructor(private httpClient: HttpClient) {
        this.address = localStorage.getItem('address');

     }

     getAllDiseases() : Observable<any>{
         return this.httpClient.get(this.address+'/diseases');
     }


}