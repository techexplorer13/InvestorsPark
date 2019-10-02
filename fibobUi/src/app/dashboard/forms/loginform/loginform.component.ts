import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupformComponent } from 'src/app/dashboard/forms/signupform/signupform.component';
import { UserService } from 'src/app/services/userdataservice';
import {Subscription} from 'rxjs';


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
  isLogInPending:boolean=false;
  username:string;
  userDataSubscription :Subscription;


  constructor(private route: ActivatedRoute, private authservice: AuthService,
     private router: Router, public dialog: MatDialog
    ,private userservice:UserService) {
      this.loginFormVal = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit(value) {
    if (value.email != null && value.password != null) {
      this.isLogInPending=true;
      this.authservice.authenticate(value.email, value.password).then(
        res => {
          this.authmessage = "Welcome " + value.email;
          this.authservice.changeMessage(true);
          this.setUserDataForHomePage(res.user.uid)
          this.isLogInPending=false;
        },
        err => {
          this.router.navigate(['/login']);
          this.authmessage = "Authetication Error !!";
          this.isLogInPending=false;
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
    return null;
  }

  flushValuesFromVariables(){
    this.messageStatus=null;
    this.signUpResult=null;
  }

  setUserDataForHomePage(id:string){
    console.log("inside setUserDataForHomePage(1)==>"+id)
      this.userDataSubscription=this.userservice.getUserData(id).subscribe(data=>{
      console.log("inside setUserDataForHomePage(2)==>")
      console.log(data)
      this.authservice.setUserName(data["0"].name)
      localStorage.setItem("username",data["0"].name)
    })
  }
}
