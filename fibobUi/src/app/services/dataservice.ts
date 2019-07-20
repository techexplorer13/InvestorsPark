
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { MarketNews } from '../entity/marketnews/marketnews';


@Injectable()
export class DataService implements OnInit{

urlEndpoint:string="https://newsapi.org/v2/everything?q=sensex&from=2019-07-19&sortBy=publishedAt&apiKey="
apikey:string="3a15cd92ea0c436fac11b41acea8358f";

constructor(private http:HttpClient){
}

ngOnInit(){
    
}

getMarketNews():Observable<MarketNews>{
    console.log("inside getStockPrice()==>")
    return <Observable<MarketNews>>this.http.get(this.urlEndpoint+this.apikey);
}

}