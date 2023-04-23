import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class YawinCalculatorService {

  private apiUrl = 'https://yawin-calculator.p.rapidapi.com/emicalculator';
  private apiKey = environment.xRapidApiKey
  constructor(private http: HttpClient) { }

  calculateLoan(amount: number, interestRate: number, term: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidApi-Key': this.apiKey,
      'X-RapidAPI-Host': 'yawin-calculator.p.rapidapi.com'
    });

    const body = {
      amount: amount,
      interest: interestRate,
      duration: term
    };
    return this.http.post(this.apiUrl, body, { headers: headers });
  }
}
