import { Component, OnInit, OnChanges,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {

  @Input('isAuth') isAuth: Boolean;
  
  constructor(private router: Router,private route: ActivatedRoute) {
   
   }

  ngOnChanges() {
    console.log("Inside ngonChnages Bannercomponent")
    if(this.isAuth==true){
        this.router.navigate(['/latestnews']);
    }
    console.log("Inside ngonChnages Bannercomponent isAuTH=== "+this.isAuth)
  }

}
