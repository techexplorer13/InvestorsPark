
import { Injectable, OnInit, Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Http} from '@angular/http';
import {Observable} from 'rxjs';
import { MarketNews } from '../entity/marketnews/marketnews';
import { formatDate } from '@angular/common';


@Injectable()
export class DataService implements OnInit{

urlEndpoint:string;
apikey:string="0f33051fb5fc4a018c6316c956acdf04";
todaysDate:string;
marketNews:any

constructor(private http:Http){
}

ngOnInit(){
}

getMarketNews(){
    this.todaysDate=formatDate(new Date(),'yyyy-MM-dd','en_US');
    this.urlEndpoint="https://newsapi.org/v2/everything?q=sensex&from="+this.todaysDate+"&sortBy=publishedAt"+ '&apiKey=0f33051fb5fc4a018c6316c956acdf04'
     return new Promise(resolve=>{
         this.http.get(this.urlEndpoint).subscribe(articles=>{
            this.marketNews=articles;
            resolve(this.marketNews)
    })});

   /** return new Promise(resolve => {
        this.http.get('https://newsapi.org/v2/everything?q=sensex&from=' + this.todaysDate+"&sortBy=publishedAt"+ '&apiKey=0f33051fb5fc4a018c6316c956acdf04')
          .subscribe(tempdata => {
            this.newsData = tempdata;
            resolve(this.newsData);
          });
      });*/
}

}