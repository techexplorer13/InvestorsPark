import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockResponse } from '../entity/StockResponse';

@Injectable({
    providedIn:"root"
})
export class FetchAllStockNames{

    constructor(private httpClient:HttpClient){}

 private headers= new HttpHeaders().append("x-rapidapi-host", "alpha-vantage.p.rapidapi.com")
 .append("x-rapidapi-key", "SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC")
 .append('Content-Type', 'application/json')

 GET_ALL_STOCKS_INFO="https://alpha-vantage.p.rapidapi.com/query?datatype=json&keywords=";

 public getAllStocksInfo(keyword:string):Observable<StockResponse>{
        return <Observable<StockResponse>>this.httpClient.get(this.GET_ALL_STOCKS_INFO+keyword+"&function=SYMBOL_SEARCH",{headers:this.headers})
}

}