import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimeseriesdailyService {

  
  private headers = new HttpHeaders().append('Content-Type', 'application/json')
  .append("x-rapidapi-host", "alpha-vantage.p.rapidapi.com")
	.append("x-rapidapi-key", "SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC");

   GET_DAILY_TIME_SERIES_DATA="https://alpha-vantage.p.rapidapi.com/query?outputsize=compact&datatype=json"+
  "&function=TIME_SERIES_DAILY_ADJUSTED&symbol=";

  constructor(private http:HttpClient) {

   }

  public getDailyTimeSeriesData(symbol:string):Observable<any>{
      return <Observable<any>>this.http.get(this.GET_DAILY_TIME_SERIES_DATA+symbol,{headers:this.headers});
  }

 
}
