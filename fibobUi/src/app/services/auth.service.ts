
import {AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

@Injectable()
export class AuthService{
  
constructor(private afAuth:AngularFireAuth,private router: Router){
}

private isAuth = new BehaviorSubject<boolean>(false);
currentMessage = this.isAuth.asObservable();
private loggedInUserName=new BehaviorSubject<string>(null);
username=this.loggedInUserName.asObservable();

changeMessage(message: boolean) {
    console.log("Inside change message()")
    this.isAuth.next(message)
    localStorage.setItem("isAuth", message.toString());
}

setUserName(name:string){
  console.log("Inside setusername()")
  this.loggedInUserName.next(name)
}


authenticate(email:string,password:string){
   return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

signout(){
  this.afAuth.auth.signOut().catch(function(error){
      alert(error+" error occurred in signing out")
  })
  this.changeMessage(false);
  localStorage.clear();
  this.setUserName(null);
}
}