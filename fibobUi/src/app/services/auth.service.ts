
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
  
constructor(private afAuth:AngularFireAuth){
}


authenticate(email:string,password:string){
   return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}

}