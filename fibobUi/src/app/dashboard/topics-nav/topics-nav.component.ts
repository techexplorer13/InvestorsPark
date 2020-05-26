import { Component, OnInit, OnChanges } from '@angular/core';
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
  routerLink:string[]=["/latestnews","/allmutualfund","/login",]
  routesNames:string[]=["null","null","Logout"]
  labels = ['Home','Investment','Logout'];
  username:string
  isFirstCall:boolean;

  constructor(private router:Router,private authservice:AuthService) { }

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

  doPreTask(routerlink:string){
    if(routerlink=="Logout"){
        console.log("enter signout")
        this.authservice.signout();
  }
  }

 openNav() {
    this.isFirstCall=true;
    if(document.getElementById("mySidebar").style.width == "100px"){
      document.getElementById("mySidebar").style.width = "0px";
    }
    else{
      document.getElementById("mySidebar").style.width = "100px";
    }
  }

}
