import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule ,
    MatProgressBarModule,
    MatFormFieldControl,
    MatSelectModule
  } from '@angular/material';
  import {
    MatDialog,
    MatDialogRef,
    MatDialogModule,
  } from '@angular/material/dialog';
  import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatTableModule,
      MatProgressBarModule,
      MatSelectModule
    ],
    declarations: [
    ],
    imports: [
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatTableModule ,
      MatProgressBarModule,
      MatSelectModule
    ]
  })
export class MaterialModule{

}