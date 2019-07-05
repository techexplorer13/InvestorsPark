import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  signUpFormVal:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignupformComponent>,private afAuth:AngularFireAuth) { 
      this.signUpFormVal=new FormGroup({

        email:new FormControl(),
        password:new FormControl(),
        date:new FormControl(),
        name:new FormControl()

    })
    }

  ngOnInit() {
  }

  createAccount(value){

    this.afAuth.auth.createUserWithEmailAndPassword(value.email,value.password).then(
      
    )
  }
}
