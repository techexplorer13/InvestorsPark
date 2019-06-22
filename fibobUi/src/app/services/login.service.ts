
import { AngularFirestore, Query, QuerySnapshot, DocumentData} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {user} from 'src/app/entity/user';


@Injectable({
    providedIn: 'root'
  })
export class LoginService{
  
constructor(private db:AngularFireDatabase,private firestore: AngularFirestore)
{
    
}


}