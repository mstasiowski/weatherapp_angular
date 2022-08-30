import { Component, OnInit } from '@angular/core';
import { Root } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  
  weather = 17;
  searchname:string ="Krosno";

 constructor(private weatherService: WeatherService)
 {

 }

 Root?: Root

  ngOnInit(): void {
    this.getWeatherData(this.searchname);
  }
    
   
   onSubmit()
   {
    this.getWeatherData(this.searchname);
    this.searchname ='';
   }

   private getWeatherData(searchname:string){
    this.weatherService.getWeatherData(this.searchname).subscribe({

      next: (response) => {
        // console.log(response);
        this.Root = response;
        
      }

   });

   }

  




}
