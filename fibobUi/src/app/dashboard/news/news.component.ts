import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/dataservice';
import { MarketNews } from 'src/app/entity/marketnews/marketnews';
import { Observable, Subscription } from 'rxjs';
import { Articles } from 'src/app/entity/marketnews/Articles';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  marketNews: any;
  selectedIndex:any=0;
  tabs:any=["Market","Global","Sports"];
  newsSubsription:Subscription
  constructor(private dataservice: DataService) { 
    this.getNews('indianstockmarket');
  }

  private getNews(val:string) {
    if(this.newsSubsription!= undefined){
      this.newsSubsription.unsubscribe()
    }
    this.newsSubsription=this.dataservice.getNews(val).subscribe((response: any) => {
      this.marketNews = response;
      console.log(this.marketNews);
    });
  }

  ngOnInit() {
    console.log("Inside StockComponent ngOninit()==>")
  
  }

  isActive(val){
    return this.selectedIndex==val;
  }

  setIndex(val){
    let type="indianstockmarket"
    this.selectedIndex=val
    if(val==1){
      type="Global"
    }
    if(val==2){
      type="Sports"
    }
    this.getNews(type)
  }
}
