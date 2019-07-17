import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  hide:boolean;
  formAlertMessage: string;
  signUpFormVal: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);

  message: string;
  constructor(
    public dialogRef: MatDialogRef<SignupformComponent>, private router: Router,
    private afAuth: AngularFireAuth,private http:HttpClient) {
    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.signUpFormVal = new FormGroup({
      email: this.email,
      password: this.password,
      name: this.name,
      date: this.date,
      id: new FormControl()
    })
  }

  ngOnInit() {
    this.hide=true;
  }

  createAccount(value) {
    console.log("Inside create account method()")
    if (!this.formValidate(value)) {
      return;
    }
    this.hide=false
    this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password).then(
      (user) => {
        value.id = user.user.uid;
        this.insertIntoUsersCollection(value)
        this.hide=true;
      }).catch(
        () => {
          console.log("createUserWithEmailAndPassword() finished===>");
          this.afterCreationOfId("failed")
          this.hide=true;
        }
      )
    console.log("Inside create account method() ended")
  }

  afterCreationOfId(message: string) {
    console.log("Inside afterCreationOfId() method===>" + message)
    this.dialogRef.close(message);
  }

  insertIntoUsersCollection(value) {
    console.log("insertIntoUsersCollection()==>")
    console.log(value.id + "  " + value.email + " " + value.password + "  " + value.date + " ");

    this.http.post('https://fibob-46c84.firebaseio.com/users.json',value).subscribe(
      (response) => {
        console.log("inside add() success==>")
        this.afterCreationOfId("success")
      }
    );
  }


  getErrorMessage(value) {
    let errormessage: string;
    if (value == "email") {
      errormessage = this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
    }
    if (value == "password") {
      errormessage = this.password.hasError('required') ? 'Please enter a password' : ''
    }
    if (value == "name") {
      errormessage = this.name.hasError('required') ? 'Please enter a name' : ''
    }
    if (value == "date") {
      errormessage = this.date.hasError('required') ? 'Please enter a date of birth' : ''
    }
    return errormessage;
  }

  formValidate(value) {
    console.log("Inside formValidate()")
    console.log("  " + value.email + " " + value.password + "  " + value.date + " ");
    if (value.email == '' || value.password == '' || value.name == '' || value.date == '') {
      console.log("Inside formValidate()==>"+false)
      this.formAlertMessage = "Please check all the fields!!"
      return false
    }
    this.formAlertMessage = null;
    return true
  }

}
