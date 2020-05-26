import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StockDetailResponse } from "../entity/StockDetailResponse";
import { Observable } from "rxjs";

export class FetchStockDetail{

    constructor(private http:HttpClient){}

    private headers= new HttpHeaders().append("x-rapidapi-host", "morningstar1.p.rapidapi.com")
    .append("x-rapidapi-key", "SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC")
    .append('Content-Type', 'application/json')

    GET_STOCK_DETAILS="https://morningstar1.p.rapidapi.com/endofdayquotes/history?Mic=XNSE&"

    public getStockDetails(quoteTicker:string):Observable<StockDetailResponse>{
        return <Observable<StockDetailResponse>>this.http.get(this.GET_STOCK_DETAILS+quoteTicker,{headers:this.headers});
    }

}