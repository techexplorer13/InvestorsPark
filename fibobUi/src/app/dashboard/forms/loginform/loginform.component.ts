import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {MatDialog} from '@angular/material/dialog';
import {SignupformComponent} from 'src/app/dashboard/forms/signupform/signupform.component';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css','../forms.component.css']
})
export class LoginformComponent implements OnInit {
  
  loginFormVal:FormGroup;
  authmessage:string;
 

  constructor(private route: ActivatedRoute,private authservice:AuthService,
    private loginService:LoginService,private router: Router,public dialog: MatDialog) { 

    this.loginFormVal=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
  })
  
  }

  ngOnInit() {
  }

  onSubmit(value){
  this.authservice.authenticate(value.email,value.password).then(
     res=>{
      this.authmessage="Welcome "+ value.email;
      this.authservice.changeMessage(true);
     },
     err=>{
      this.router.navigate(['/login']);
      this.authmessage="Authetication Error !!";
      alert(this.authmessage);
     },
  );
}


openSignUpForm():void{
  const dialogRef = this.dialog.open(SignupformComponent, {
    width: '500px',
    height:'500px',
  });
}

}
