import { Component, OnInit } from '@angular/core';
import { faCloud,faSun,faTemperatureFull,faTemperatureEmpty,faWind,faTint, faCompass,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './services/weather.service';
import {WeatherData} from './models/weather.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  iCloud = faCloud;
  iSun = faSun;
  iTemperatureFull = faTemperatureFull;
  iTemperatureEmpty = faTemperatureEmpty;
  iWind = faWind;
  iHumidity = faTint;
  iCompass = faCompass;
  iSearch = faMagnifyingGlass;
  cityName = "istanbul";

  constructor(private weatherService: WeatherService){}

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
  onSubmit(): void{
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
