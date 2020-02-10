import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { Component, Inject } from '@angular/core';
import { ManualService } from 'src/app/services/manual.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manual-editor',
  templateUrl: './manual-editor.component.html',
  styleUrls: ['./manual-editor.component.css']
})
export class ManualEditorComponent {
  callTreeEntry: CallTreeEntry;
  callTreeEntryId: number;
  manuals;
  message: string;
  constructor(public manualService: ManualService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<ManualEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.callTreeEntry=data.callTreeEntry;
                this.message = this.callTreeEntry.systemName + ' has ';
                this.message +=((this.callTreeEntry.manuals==null)?"0":this.callTreeEntry.manuals.length);
                this.message +=' operation manual(s)';
              }
  
  closeDialog() {
    this.dialog.closeAll();
  }
  
  onSubmit(form: NgForm){
    console.log('form.dirty=' + form.dirty);
    console.log('form.valid=' + form.valid);
    if (form.pristine && form.valid) {
      this.closeDialog();
    } else {
      if (form.valid) {
        this.updateManual();
      }
    }
  }
  
  updateManual() {
    this.manualService.updateManuals(this.callTreeEntry).subscribe((res: boolean) => {
      console.log("Go");
    });
  }
}
