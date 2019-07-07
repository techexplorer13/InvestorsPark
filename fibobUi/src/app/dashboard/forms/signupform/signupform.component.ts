import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  signUpFormVal:FormGroup;
  message:string;
  constructor(
    public dialogRef: MatDialogRef<SignupformComponent>,private router:Router,
    private afAuth:AngularFireAuth,private angularFireStore:AngularFirestore) { 
      this.signUpFormVal=new FormGroup({

        email:new FormControl(),
        password:new FormControl(),
        date:new FormControl(),
        name:new FormControl(),
        id:new FormControl()

    })
    }

  ngOnInit() {
  }

  createAccount(value){
    console.log("Inside create account method()")
    this.afAuth.auth.createUserWithEmailAndPassword(value.email,value.password).then(
      (user)=>{
        value.id=user.user.uid;
        this.insertIntoUsersCollection(value)
      }).catch(
      ()=>{
        console.log("createUserWithEmailAndPassword() finished===>");
        this.afterCreationOfId("failed")
      }
    )
  console.log("Inside create account method() ended")
  }

  afterCreationOfId(message:string){
      console.log("Inside afterCreationOfId() method===>"+message)
      this.dialogRef.close(message);
  }
  
  insertIntoUsersCollection(value){
  
  console.log("insertIntoUsersCollection()==>")
  console.log(value._id+"  "+value.email+" "+value.password+"  "+value.date+" ");

  this.angularFireStore.collection('users').add(value).then(
    ()=>{
      console.log("inside add() success==>")
      this.afterCreationOfId("success")
    }
  ).catch(
    ()=>{
      console.log("inside add() failed==>")
      this.afterCreationOfId("failed")
    }
  )}
}
