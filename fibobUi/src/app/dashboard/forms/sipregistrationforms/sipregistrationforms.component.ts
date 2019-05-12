
import { Component,Inject} from '@angular/core';
import { sipRegistrationDetailsData} from 'src/app/dashboard/forms/sipregistrationforms/sipRegistartionDetailsData';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'sipregistrationforms.component.html',
    styleUrls: ['./sipregistrationforms.component.css','../forms.component.css']
  })
  export class SipregistrationformsComponent {
    
    dates:String[]=["1","2","25"]
    constructor(
      public dialogRef: MatDialogRef<SipregistrationformsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: sipRegistrationDetailsData) {}
      
  
  }