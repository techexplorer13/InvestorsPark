
import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Http,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { MarketNews } from '../entity/marketnews/marketnews';
import { formatDate } from '@angular/common';


@Injectable()
export class DataService implements OnInit{

urlEndpoint:string;
apikey:string="0f33051fb5fc4a018c6316c956acdf04";
todaysDate:string;
marketNews:any

private headers= new HttpHeaders().append('Content-Type', 'application/json')
  .append("x-rapidapi-host", "microsoft-azure-bing-news-search-v1.p.rapidapi.com")
	.append("x-rapidapi-key", "SD9BkTcTYymsh4MyQs90mUTd9jFwp1MElTejsn6gBjrBlzN3KC");


constructor(private http:HttpClient){
}

ngOnInit(){
}

getNews(type:string):Observable<any>{
    this.urlEndpoint="https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q="+type;
    return this.http.get(this.urlEndpoint,{headers:this.headers});
}

}