import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllMutualFund {

  private headers = new HttpHeaders().append('Content-Type', 'application/json').append('X-Mashape-Key'
,'qXh9J5jsfimsh7ng0zGozuz4jt5Hp1r2m9ajsn8MNbPYtoYdDV');

  constructor(private http: HttpClient) {
    
   }

 GET_ALL_MUTUAL_FUND_URL = 'https://dmoin-mutual-fund-nav-bse-india-v1.p.mashape.com/GetAllFundHouses'
    private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getProducts(): Observable<any> {
    return this.http.get(this.GET_ALL_MUTUAL_FUND_URL, { headers: this.headers }).pipe(
      map(this.extractData));
  }
 
}
