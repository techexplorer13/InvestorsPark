import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from 'src/app/services/dataservice';
import { MarketNews } from 'src/app/entity/marketnews/marketnews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  marketNews:MarketNews

  constructor(private http:HttpClient,private dataservice:DataService) { }

  ngOnInit() {
    console.log("Inside StockComponent ngOninit()==>")
    this.dataservice.getMarketNews().subscribe((response:MarketNews)=>{
      this.marketNews=response;
    })
     
  }

  
}
