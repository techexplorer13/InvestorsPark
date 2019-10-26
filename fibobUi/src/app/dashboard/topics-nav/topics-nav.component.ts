import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service'

@Component({
  selector: 'app-topics-nav',
  templateUrl: './topics-nav.component.html',
  styleUrls: ['./topics-nav.component.css']
})
export class TopicsNavComponent implements OnInit,OnChanges {
  /**
   * parent options of nav br
   */
  topics:string[]=["Home","My Account","SIP Investment","Mutual Fund","About us"]
  /**
   * for mutual fund nav bar
   */
  mutualFundtopics:any[]=[["All Mutual Fund","/allmutualfund"]];
  sipTopics:any[]=[["Recommended Funds",""],["Equity Funds",""],["Debt Fund",""]];
  myAccount:any[]=[["Logout","/login"]];

  selectedNavBar:any[];

  username:string

  constructor(private router:Router,private authservice:AuthService) { }
  ngOnChanges(){
    if(document.getElementById("mySidebar").style.width == "100px"){
      document.getElementById("mySidebar").style.width = "0px";
    }

  }
  ngOnInit() {
    console.log("inside ngoninit() topicsnavcomp==>")
    this.authservice.username.subscribe(name=>{
      console.log(name)
      if(name==null){
        name=localStorage.getItem("username")
      }
      this.username=name;
      console.log(this.username)
    })
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
    console.log(this.selectedNavBar)
  }

  doPreTask(routerlink:string){
    if(routerlink=="Logout"){
        console.log("enter signout")
        this.authservice.signout();
  }
  }

 openNav() {
    if(document.getElementById("mySidebar").style.width == "100px"){
      document.getElementById("mySidebar").style.width = "0px";
    }
    else{
      document.getElementById("mySidebar").style.width = "100px";
    }
  }
}
