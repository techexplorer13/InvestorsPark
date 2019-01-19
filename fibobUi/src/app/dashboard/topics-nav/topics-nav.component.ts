import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-nav',
  templateUrl: './topics-nav.component.html',
  styleUrls: ['./topics-nav.component.css']
})
export class TopicsNavComponent implements OnInit {
  topics:string[]=["SIP Investment","Mutual Fund","About us"]
  mutualFundtopics:string[]=["All Mutual Fund"];

  selectedNavBar:string[];

  constructor() { }

  ngOnInit() {
  }

  setOptions(topic){
    if(topic=="Mutual Fund"){
      this.selectedNavBar=this.mutualFundtopics;
    }
  }
}
