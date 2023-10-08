import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  result: any
  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '70e0a2c32amshe1beedb48dbef8cp10acd8jsn17a4c7e7694d',
    'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
  });

  GetSexo(token: string) {
    return this.http.post('http://localhost:3000/api/imc', token);

  }


  GetBMR(altura: number, peso: number, edad: number, sexo: string) {
    return this.result = this.http.get(`https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${peso}&height=${altura}&age=${edad}&gender=${sexo}`, { headers: this.headers })

  }

  GetBFP(altura: number, peso: number, edad: number, sexo: string) {
    return this.http.get(`https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${peso}&height=${altura}&age=${edad}&gender=${sexo}`, { headers: this.headers });
  }

  GetIBW(altura: number, peso: number, edad: number, sexo: string) {
    return this.http.get(`https://mega-fitness-calculator1.p.rapidapi.com/ibw?weight=${peso}&height=${altura}&age=${edad}&gender=${sexo}`, { headers: this.headers });
  }

  GetIMC(altura: number, peso: number) {
    {
      return this.http.get(`https://fitness-calculator.p.rapidapi.com/bmi?&weight=${peso}&height=${altura}`, { headers: this.headers })
    }
  }

  cobinarLlmadosApi(altura: number, peso: number, edad: number, sexo: string): Observable<any[]>{
    return forkJoin([
      this.GetIMC(altura, peso), 
      this.GetBMR(altura, peso, edad, sexo),
       this.GetIBW(altura, peso, edad, sexo), 
       this.GetBFP(altura, peso, edad, sexo)])


  }

}
