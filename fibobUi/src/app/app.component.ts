import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Financial Bob';
  isAuth: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.isAuth = false;
  }

  ngOnInit() {
    console.log("Inside ngoninit appcomponent")
    /**
     * using local storage because on reload value is lost
     */
    let isLocalStorageIsAuth = localStorage.getItem("isAuth") == 'true' ? true : false;
    if (isLocalStorageIsAuth != null) {
      console.log("isLocalStorageIsAuth====>" + isLocalStorageIsAuth)
      this.authService.changeMessage(isLocalStorageIsAuth);
    }
    
    this.authService.currentMessage.subscribe(message => {
      console.log("Inside ngoninit appcomponent isLoggedIn call()====>" + message)
      this.isAuth = message;
      console.log("Inside ngoninit appcomponent isLoggedIn call()====>" + message)
      if (this.isAuth === false) {
        this.router.navigate(['/login']);
      }
    });

    console.log("Inside ngoninit appcomponent isAuth-==>" + this.isAuth)
  }

  isUserAuthenticated() {
    return this.isAuth
  }
}
