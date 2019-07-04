
import {AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
  
constructor(private afAuth:AngularFireAuth,private router: Router){
}

private isAuth = new BehaviorSubject<boolean>(false);
currentMessage = this.isAuth.asObservable();

changeMessage(message: boolean) {
    this.isAuth.next(message)
  }

  public isLoggedIn(){
     this.afAuth.idToken.subscribe(message=>{
       if(message){
         this.changeMessage(true)
       }
     })
      return this.currentMessage
  }

authenticate(email:string,password:string){
   return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

signout(){
  this.afAuth.auth.signOut().catch(function(error){
      alert(error+" error occurred in signing out")
  })
  this.changeMessage(false);
}
}