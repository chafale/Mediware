import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    
    url : string;
        constructor(private httpClient : HttpClient) {
            console.log('Component service added');
            this.url = 'http://openweathermap.org/data/2.5/weather?id=1262180&appid=b6907d289e10d714a6e88b30761fae22';

         }

         getURL() : Observable<any>{
            console.log(this.url);
            return this.httpClient.get(this.url);
        }
}