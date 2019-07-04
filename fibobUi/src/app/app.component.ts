import { Component } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Financial Bob';
  isAuth:Boolean;

  constructor(private router: Router,private route: ActivatedRoute,private authService: AuthService){
    this.isAuth=false;
  }

  ngOnInit(){
    this.authService.isLoggedIn().subscribe(message => this.isAuth = message)
    if(this.isAuth==false){
    this.router.navigate(['/login']);
    }
  }

  isUserAuthenticated(){
    return this.isAuth
  }
}
