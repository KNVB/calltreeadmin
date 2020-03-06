import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { OperationResult } from 'src/app/classes/OperationResult';

@Component({
  selector: 'app-call-tree-entry-editor',
  templateUrl: './call-tree-entry-editor.component.html',
  styleUrls: ['./call-tree-entry-editor.component.css']
})
export class CallTreeEntryEditorComponent{
    action: string;
    callTreeType = 1;
    callTreeEntry: CallTreeEntry = null;
    divisionToSystem: string[] = [];
    manualMessage = 'Operation Manual(Optional):';
    sharedCallTreeDetail = '';
    sharedDivision: string;
    sharedDivisionList: string[];
    sharedSystemNameList: string[];
    systemToCalltree = [];
    constructor(private callTreeEntryService: CallTreeEntryService,
                public dialog: MatDialog,
                private dialogRef: MatDialogRef<CallTreeEntryEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
                  this.action = data.action;
                  this.callTreeEntry = data.callTreeEntry;
                  this.divisionToSystem = data.divisionToSystem;
                  this.sharedDivisionList = data.sharedDivisionList;
                  this.systemToCalltree = data.systemToCalltree;
              }
    addCallTreeEntry() {
      this.callTreeEntryService.addCallTreeEntry(this.callTreeEntry).subscribe((res: OperationResult) => {
        this.dialogRef.close({action: this.action, addSuccess: res.success, callTreeEntry: res.returnObj});
      });
    }
    closeDialog() {
      this.dialog.closeAll();
    }
    onCallTreeTypeChange(callTreeType) {
      if (callTreeType === 1) {// new a individual call tree
        this.callTreeEntry.callTree.callTreeId = -1;
      }
    }
    onSharedDivisionChange(division) {
      this.sharedSystemNameList = [...this.divisionToSystem[division]]; // Clone Array
      this.sharedCallTreeDetail = '';
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
    updateCallTreeDetail(event) {
      const target = event.source.selected._element.nativeElement;
      const systemName = target.innerText.trim();
      this.callTreeEntry.callTree.callTreeDetail = this.systemToCalltree[systemName].callTreeDetail;
      this.sharedCallTreeDetail = this.callTreeEntry.callTree.callTreeDetail.replace(/<br \/>/g, '');
    }
    updateCallTreeEntry() {
      this.callTreeEntryService.updateCallTreeEntry(this.callTreeEntry).subscribe((res: boolean) => {
        this.dialogRef.close({action: this.action, callTreeEntry: this.callTreeEntry, updateSuccess: res});
      });
    }
}
