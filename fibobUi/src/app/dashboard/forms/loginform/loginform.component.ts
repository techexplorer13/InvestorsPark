import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupformComponent } from 'src/app/dashboard/forms/signupform/signupform.component';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css', '../forms.component.css']
})
export class LoginformComponent implements OnInit {

  loginFormVal: FormGroup;
  authmessage: string;
  messageStatus: string;
  signUpResult: string;
  dialogRef;


  constructor(private route: ActivatedRoute, private authservice: AuthService,
    private loginService: LoginService, private router: Router, public dialog: MatDialog) {

    this.loginFormVal = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }

  ngOnInit() {
  }

  onSubmit(value) {
    if (value.email != null && value.password != null) {
      this.authservice.authenticate(value.email, value.password).then(
        res => {
          this.authmessage = "Welcome " + value.email;
          this.authservice.changeMessage(true);
        },
        err => {
          this.router.navigate(['/login']);
          this.authmessage = "Authetication Error !!";
          alert(this.authmessage);
        },
      );
    }
  }


  openSignUpForm(): void {

    this.flushValuesFromVariables();

    this.dialogRef = this.dialog.open(SignupformComponent, {
      width: '500px',
      height: '500px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log("inside dialogref afterclosing()")
      this.signUpResult = result;
      if (result == "success") {
        this.messageStatus = "Congrats !!!Registered Successfullyy.";
      }
      if (result == "failed") {
        this.messageStatus = "Error occured!! while signing up";
      }
    })
  }

  getStatusOfSignUp() {
    if (this.signUpResult == "success")
      return 'alert alert-success';
    if (this.signUpResult == "failed") {
      return 'alert alert-danger';
    }
  }

  flushValuesFromVariables(){
    this.messageStatus=null;
    this.signUpResult=null;
  }
}
