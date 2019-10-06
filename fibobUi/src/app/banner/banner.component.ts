import { Component,Input, OnChanges } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnChanges {

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
