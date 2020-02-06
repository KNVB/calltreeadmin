import { Component, Inject } from '@angular/core';
import { Manual } from 'src/app/classes/Manual';
import { ManualService } from 'src/app/services/manual.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manual-editor',
  templateUrl: './manual-editor.component.html',
  styleUrls: ['./manual-editor.component.css']
})
export class ManualEditorComponent {
  callTreeEntryId: number;
  manuals: Manual[];
  message: string;
  systemName: string;
  constructor(public manualService: ManualService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<ManualEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.callTreeEntryId = data.callTreeEntryId;
                this.systemName = data.systemName;
                this.manualService.getManualsByCallTreeEntryId(this.callTreeEntryId).subscribe((res: Manual[]) => {
                  this.manuals = res;
                  this.message = this.systemName + ' has ' +((this.manuals==null)?"0":this.manuals.length);
                  this.message +=' operation manual(s)';
                });
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
      console.log(form.valid);
      if (form.valid) {
        this.updateManual();
      }
    }
  }
  
  updateManual() {
    this.manualService.updateManuals(this.callTreeEntryId,this.manuals).subscribe((res: boolean) => {
      console.log("Go");
    });
  }
}
