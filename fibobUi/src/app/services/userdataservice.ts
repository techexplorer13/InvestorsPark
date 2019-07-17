
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable()
export class UserService{

constructor(private http:HttpClient,private db:AngularFireDatabase){
}


public getUserData(id:string):Observable<any>{
    console.log("fetching details for uuid:==>"+id);
    return this.db.list("/users",ref=> ref.orderByChild('id').equalTo(id)).valueChanges();
}

}