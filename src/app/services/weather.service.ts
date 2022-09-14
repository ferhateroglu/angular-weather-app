import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {WeatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeatherData(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl + new URLSearchParams({
      key: environment.APIKey,
      q: city,
    }))
  }
}
