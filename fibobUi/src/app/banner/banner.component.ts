import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {user} from 'src/app/entity/user';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnChanges {

  @Input('isAuth') isAuth: Boolean;
  
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnChanges() {
    if(this.isAuth==true){
        this.router.navigate(['/allmutualfund']);
    }
  }
}
