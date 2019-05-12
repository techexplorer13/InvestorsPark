import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {FormBuilder,FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css','../forms.component.css']
})
export class LoginformComponent implements OnInit {
  
  loginFormVal:FormGroup;

  constructor(private route: ActivatedRoute,private authservice:AuthService) { 
    this.loginFormVal=new FormGroup({
      email:new FormControl(),
      password:new FormControl()
  })
  }

  ngOnInit() {
  }

  onSubmit(value){
    this.authservice.authenticate(value.email,value.password);
  }

}
