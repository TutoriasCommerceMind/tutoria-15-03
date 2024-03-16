import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  url: string = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
  headers = {
    'X-RapidAPI-Key': '998aece269msh14cc2a29cde7443p1003fajsn1c673c092018',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  };

  constructor(private http: HttpClient) {}

  getClima(ciudad: string) {
    return this.http.get(this.url + ciudad, {
      headers: this.headers,
    });
  }
}
