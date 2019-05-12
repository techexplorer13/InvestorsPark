
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{

private user:User;

constructor(private afAuth:AngularFireAuth){

this.afAuth.authState.subscribe(user => {
    if (user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })
}


authenticate(email:string,password:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

}