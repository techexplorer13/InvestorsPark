import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service'

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
  myAccount:any[]=[["Logout","/login"]];

  selectedNavBar:any[];

  constructor(private router:Router,private authservice:AuthService) { }

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

  doPreTask(routerlink:string){
    if(routerlink=="Logout"){
        console.log("enter signout")
        this.authservice.signout();
    }
  }
}
