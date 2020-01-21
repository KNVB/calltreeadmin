import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {
  title: string;
  constructor(public dialog: MatDialog,
              private dialogRef: MatDialogRef<ConfirmationBoxComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.title = data.title;
              }

  ngOnInit() {
  }
  sayYes() {
    this.dialogRef.close(true);
  }
  sayNo() {
    this.dialogRef.close(false);
  }
}
