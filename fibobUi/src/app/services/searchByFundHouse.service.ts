import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap,share } from 'rxjs/operators';
import { mutualFundInfo } from 'src/app/entity/mutualfundInfo';
@Injectable({
  providedIn: 'root'
})
export class SearchByFundHouse {

  private headers = new HttpHeaders().append('Content-Type', 'application/json').append('X-RapidAPI-Key'
,'SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC');

  constructor(private http: HttpClient) {
    
   }

 GET_MUTUAL_FUND_INFO = 'https://dmoin-mutual-fund-nav-bse-india-v1.p.rapidapi.com/GetFundsByFundHouse'

private mutualFundList:Array<mutualFundInfo>;
   private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getFundNamesFromFundHouse(fundName:string): Observable<Array<mutualFundInfo>> {
      let params = new HttpParams().set("fundHouse",fundName)
    return this.http.get(this.GET_MUTUAL_FUND_INFO, { headers: this.headers ,params:params}).pipe(
      map((response:Array<mutualFundInfo>)=>{
        if(response==null){
          this.mutualFundList=[];
        }else{
          this.mutualFundList=response;
        }
        return this.mutualFundList;
      })).pipe(share());
  }
 
}
