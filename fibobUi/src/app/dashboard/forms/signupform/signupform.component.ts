import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignupformComponent>) { }

  ngOnInit() {
  }

}
