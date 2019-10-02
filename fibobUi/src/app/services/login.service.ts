
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LoginService{
  
constructor(private db:AngularFireDatabase,private firestore: AngularFirestore)
{
    
}
}