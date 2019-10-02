
import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { MarketNews } from '../entity/marketnews/marketnews';
import { formatDate } from '@angular/common';


@Injectable()
export class DataService implements OnInit{

urlEndpoint:string;
apikey:string="3a15cd92ea0c436fac11b41acea8358f";
todaysDate:string;

constructor(private http:HttpClient){
}

ngOnInit(){
}

getMarketNews():Observable<MarketNews>{
    this.todaysDate=formatDate(new Date(),'yyyy-MM-dd','en_US');
    this.urlEndpoint="https://newsapi.org/v2/everything?q=sensex&from="+this.todaysDate+"&sortBy=publishedAt&apiKey="
    return <Observable<MarketNews>>this.http.get(this.urlEndpoint+this.apikey);
}

}