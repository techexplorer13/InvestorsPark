import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
export class FetchAllSchemeNames{
    private headers = new HttpHeaders().append('Content-Type', 'application/json').
  append('x-rapidapi-host', 'latest-mutual-fund-nav.p.rapidapi.com')
  .append('x-rapidapi-key', 'SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC');

  constructor(private http: HttpClient) {
    
}

GET_ALL_SCHEMESNAME_URL="https://latest-mutual-fund-nav.p.rapidapi.com/fetchAllSchemeNames";

getAllSchemeNames():Observable<any>{
  return <Observable<any>>this.http.get(this.GET_ALL_SCHEMESNAME_URL, { headers: this.headers });
}
}