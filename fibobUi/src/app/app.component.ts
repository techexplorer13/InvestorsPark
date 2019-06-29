import { Component ,ViewChild} from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';
import {DataService} from 'src/app/services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Financial Bob';
  isAuth:Boolean;

  constructor(private router: Router,private route: ActivatedRoute,private data: DataService){
    this.isAuth=false;
  }

  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.isAuth = message)
    if(this.isAuth==false){
    this.router.navigate(['/login']);
    }
  }

  isUserAuthenticated(){
    return this.isAuth;
  }
}
