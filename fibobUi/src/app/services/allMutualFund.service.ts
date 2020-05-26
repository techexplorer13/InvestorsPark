import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllMutualFund {

  private headers = new HttpHeaders().append('Content-Type', 'application/json').
  append('x-rapidapi-host', 'latest-mutual-fund-nav.p.rapidapi.com')
  .append('x-rapidapi-key', 'SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC');

  constructor(private http: HttpClient) {
    
   }

 GET_ALL_MUTUAL_FUND_URL = 'https://latest-mutual-fund-nav.p.rapidapi.com/fetchAllMutualFundFamilies'
    private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getProducts(): Observable<any> {
    return this.http.get(this.GET_ALL_MUTUAL_FUND_URL, { headers: this.headers }).pipe(
      map(this.extractData));
  }
 
}
