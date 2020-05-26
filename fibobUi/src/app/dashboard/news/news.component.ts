import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/dataservice';
import { MarketNews } from 'src/app/entity/marketnews/marketnews';
import { Observable } from 'rxjs';
import { Articles } from 'src/app/entity/marketnews/Articles';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  marketNews: any

  constructor(private dataservice: DataService) { 
    this.dataservice.getMarketNews().then((response: any) => {
      this.marketNews = response.json();
      console.log(this.marketNews)
    })
  }

  ngOnInit() {
    console.log("Inside StockComponent ngOninit()==>")
  
  }
}
