import { Component, Inject} from '@angular/core';
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-tree-entry-maintenance',
  templateUrl: './call-tree-entry-maintenance.component.html',
  styleUrls: ['./call-tree-entry-maintenance.component.css']
})
export class CallTreeEntryMaintenanceComponent {
  action: string;
  callTreeEntry: CallTreeEntry;
  divisionToSystem: string[] = [];
  sharedDivisionList: string[];
  systemToCalltree = [];
  constructor(private callTreeEntryService: CallTreeEntryService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<CallTreeEntryMaintenanceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.action = data.action;
                this.callTreeEntry = data.callTreeEntry;
                this.divisionToSystem = data.divisionToSystem;
                this.sharedDivisionList = data.sharedDivisionList;
                this.systemToCalltree = data.systemToCalltree;
              }
  addCallTreeEntry() {
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      switch (this.action) {
        case 'Add': this.addCallTreeEntry();
                    break;
        case 'Edit': this.updateCallTreeEntry();
                     break;
      }
    }
  }
  updateCallTreeEntry() {
  }
}
