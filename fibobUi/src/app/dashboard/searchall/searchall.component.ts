import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FetchAllSchemeNames } from 'src/app/services/fetchAllSchemeNames'
import { FetchAllStockNames } from 'src/app/services/fetchAllStockNames';
import { Subscription } from 'rxjs';
import { StockResponse } from 'src/app/entity/StockResponse';
import { StockInfo } from 'src/app/entity/StockInfo'
import { SearchBean } from 'src/app/entity/SearchBean';

@Component({
  selector: 'app-searchall',
  templateUrl: './searchall.component.html',
  styleUrls: ['./searchall.component.css']
})
export class SearchallComponent implements AfterViewInit {
  matchBeanArray: Array<SearchBean>;;
  schemeSubs: Subscription;
  stockSubs: Subscription;
  searchBeanArray: Array<StockInfo>;
  selectedstockInfo: StockInfo;
  inprogress: boolean = false

  constructor(private schemeService: FetchAllSchemeNames, private stockService: FetchAllStockNames) {
    this.searchBeanArray = []
  }

  ngAfterViewInit() {
    document.getElementById('searchBar').addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        document.getElementById("searchicon").click();
      }
    })
  }

  flipiIcon() {
    if (document.getElementById('searchicon').style.display == 'none') {
      document.getElementById('searchicon').style.display = 'block';
    }
    else {
      document.getElementById('searchicon').style.display = 'none';
    }

    if (document.getElementById('loadicon').style.display == 'block') {
      document.getElementById('loadicon').style.display = 'none'
    }
    else {
      document.getElementById('loadicon').style.display = 'block'
    }
  }

  searchAll(searchval: string) {
    this.flipiIcon();
    this.flush();
    if (!(this.stockSubs == undefined)) { this.stockSubs.unsubscribe() }
      this.stockSubs = this.stockService.getAllStocksInfo(searchval).subscribe((res: StockResponse) => {
        res.bestMatches.forEach(matchedVal => {
          let stockInfo = new StockInfo()
          Object.entries(matchedVal).map((key) => {
            if (key[0].includes("symbol")) {
              stockInfo.symbol = <string>key[1];
            }
            if (key[0].includes("name")) {
              stockInfo.name = <string>key[1];
            }
            if (key[0].includes("type")) {
              stockInfo.type = <string>key[1];
            }
            if (key[0].includes("region")) {
              stockInfo.region = <string>key[1];
            }
            if (key[0].includes("marketOpen")) {
              stockInfo.marketOpen = <string>key[1];
            }
            if (key[0].includes("marketClose")) {
              stockInfo.marketClose = <string>key[1];
            }
            if (key[0].includes("timezone")) {
              stockInfo.timezone = <string>key[1];
            }
            if (key[0].includes("currency")) {
              stockInfo.currency = <string>key[1];
            }
            if (key[0].includes("matchScore")) {
              stockInfo.matchScore = <string>key[1];
            }
          })
          this.searchBeanArray.push(stockInfo)
        })
        this.flipiIcon();
      })

    setTimeout(() => {
      if(document.getElementById('loadicon').style.display == 'block'){
        this.flipiIcon()
      }
      this.stockSubs.unsubscribe();
      console.log('stock info observable unsubscribed')
    }, 10000);
  }

  private flush() {
    while (this.searchBeanArray.length > 0) {
      this.searchBeanArray.pop();
    }
  }

  private checkColor(val: string): string {
    return val == 'Equity' ? 'blue' : 'red'
  }

  private getGraphFromSymbol(val: StockInfo) {
    this.selectedstockInfo = val;
  }
}
