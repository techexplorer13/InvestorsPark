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
  topics:string[]=["My Account","SIP Investment","Mutual Fund","About us"]
  /**
   * for mutual fund nav bar
   */
  mutualFundtopics:any[]=[["All Mutual Fund","/allmutualfund"]];
  sipTopics:any[]=[["Recommended Funds",""],["Equity Funds",""],["Debt Fund",""]];
  myAccount:any[]=[["Login",""]];

  selectedNavBar:any[];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  setOptions(topic){
    if(topic=="Mutual Fund"){
      this.selectedNavBar=this.mutualFundtopics;
    }
    if(topic=="SIP Investment"){
      this.selectedNavBar=this.sipTopics;
    }
    if(topic=="My Account"){
      this.selectedNavBar=this.myAccount;
    }
  }
}
