import { Component, OnChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import * as CanvasJS from 'src/canvasjs.min.js';
import { TimeseriesdailyService } from 'src/app/services/timeseriesdaily.service'
import { TimeSeriesData } from 'src/app/entity/TimeSeries/TimeSeriesData';
import { JsonConvert } from "json2typescript";
import { TimeSeriesInfo } from 'src/app/entity/TimeSeries/TimeSeriesInfo';
import { Subscription } from 'rxjs';
import { StockInfo } from 'src/app/entity/StockInfo';

@Component({
  selector: 'app-graph-component',
  templateUrl: './GraphChart.component.html',
  styleUrls: ['./GraphChart.component.css']
})
export class GraphComponent implements OnChanges {

  @Input('stockInfo')
  stockInfo: StockInfo;

  timeSeriesData: TimeSeriesData;
  jsonConvert: JsonConvert;
  dailytimeSeriesSub:Subscription;

  timeserieschartdata:any;

  constructor(private timeseriesData: TimeseriesdailyService) {
    this.jsonConvert = new JsonConvert()
  }

  ngOnChanges() {
    console.log(this.stockInfo.symbol)
    this.loader(true)
    this.timeserieschartdata=new Array<Object>();
    if(this.dailytimeSeriesSub!=undefined){
      this.dailytimeSeriesSub.unsubscribe();
    }

    this.dailytimeSeriesSub=this.timeseriesData.getDailyTimeSeriesData(this.stockInfo.symbol).subscribe(res => {
      this.timeSeriesData = this.jsonConvert.deserializeObject(res, TimeSeriesData);
      this.timeSeriesData.timeSeriesDaily.timeseriesInfoMap = this.convertObjecttoTimeSeriesDaily(res);
      
      this.timeSeriesData.timeSeriesDaily.timeseriesInfoMap.forEach((value: TimeSeriesInfo, key: string)=>{
        var d=key.split('-');
        
        this.timeserieschartdata.push({
          y:+value.close,
          x:new Date(+d[0],+d[1]-1,+d[2])
        })
      })

      console.log(this.timeserieschartdata)
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        width: 740,
        axisX:{
          valueFormatString:  "DD MMMM YYYY"
        },
        axisY: {
          includeZero: false
        },
        data: [{
          type: "line",
          dataPoints: this.timeserieschartdata
        }]  // random generator below
      });
      this.loader(false)
      chart.render();
    })
  }

  convertObjecttoTimeSeriesDaily(res: Object): any {
    let timeSeriesDailyMap: Map<String, TimeSeriesInfo> = new Map();
    Object.entries(res["Time Series (Daily)"]).map(val => {
      timeSeriesDailyMap.set(val[0], this.jsonConvert.deserializeObject(val[1], TimeSeriesInfo))
    })
    console.log(timeSeriesDailyMap)
    return timeSeriesDailyMap;
  }
  
  loader(start:boolean ){
    if(start){
    document.getElementById('GraphInfo').style.display='none'
    document.getElementById('loader').style.display=''
    }
    else{
      document.getElementById('GraphInfo').style.display=''
      document.getElementById('loader').style.display='none'
    }
  }
}
