import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics-nav',
  templateUrl: './topics-nav.component.html',
  styleUrls: ['./topics-nav.component.css']
})
export class TopicsNavComponent implements OnInit {
  /**
   * parent options of nav br
   */
  topics:string[]=["SIP Investment","Mutual Fund","About us"]
  /**
   * for mutual fund nav bar
   */
  mutualFundtopics:any[]=[["All Mutual Fund","/allmutualfund"]];

  selectedNavBar:any[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  setOptions(topic){
    if(topic=="Mutual Fund"){
      this.selectedNavBar=this.mutualFundtopics;
    }
  }
}
