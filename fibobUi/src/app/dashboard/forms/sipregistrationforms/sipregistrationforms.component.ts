
import { Component, OnInit ,Input,Inject} from '@angular/core';
import { sipRegistrationDetailsData} from 'src/app/dashboard/forms/sipregistrationforms/sipRegistartionDetailsData';
import {MatDialog, MatDialogRef, MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'sipregistrationforms.component.html',
    styleUrls: ['./sipregistrationforms.component.css']
  })
  export class SipregistrationformsComponent {
    
    dates:String[]=["1","2","25"]


    constructor(
      public dialogRef: MatDialogRef<SipregistrationformsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: sipRegistrationDetailsData) {}
      
  
  }