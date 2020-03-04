import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { Component, Inject } from '@angular/core';
import { Manual } from 'src/app/classes/Manual';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


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
                  if ( data.callTreeEntryId === -1) {
                    this.callTreeEntry = new CallTreeEntry();
                  }
                  data.callTreeEntryList.forEach((sharedCallTreeEntry: CallTreeEntry) => {
                    if ( data.callTreeEntryId > -1) {
                      if (sharedCallTreeEntry.callTreeEntryId === data.callTreeEntryId) {
                        this.callTreeEntry = sharedCallTreeEntry;
                      }
                    }
                    if (!this.divisionToSystem.hasOwnProperty(sharedCallTreeEntry.division)) {
                      this.divisionToSystem[sharedCallTreeEntry.division] = [];
                    }
                    this.divisionToSystem[sharedCallTreeEntry.division].push(sharedCallTreeEntry.systemName);
                    if (!this.systemToCalltree.hasOwnProperty(sharedCallTreeEntry.systemName)) {
                      this.systemToCalltree[sharedCallTreeEntry.systemName] = [];
                    }
                    this.systemToCalltree[sharedCallTreeEntry.systemName] = sharedCallTreeEntry.callTree;
                  });
                  console.log(this.callTreeEntry.serviceLevel);
                  this.sharedDivisionList = Object.keys(this.divisionToSystem).sort();
              }
    addCallTreeEntry() {
      let message = '';
      console.log(this.callTreeEntry.manuals);
      this.callTreeEntryService.addCallTreeEntry(this.callTreeEntry).subscribe((res: CallTreeEntry) => {
        if (res !== null) {
          message += 'Add Call Tree Entry success.';
          this.callTreeEntry = res;
          this.dialogRef.close({addSuccess: res, action: this.action, callTreeEntry: this.callTreeEntry});
        } else {
          message += 'Add Call Tree Entry failure.';
        }
        alert(message);
        console.log('action:' + this.action);
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
      this.sharedCallTreeDetail = this.systemToCalltree[systemName].callTreeDetail;
      this.sharedCallTreeDetail = this.sharedCallTreeDetail.replace(/<br \/>/g, '');
    }
    updateCallTreeEntry() {
      let message = '';
      this.callTreeEntryService.updateCallTreeEntry(this.callTreeEntry).subscribe((res: boolean) => {
        if (res) {
          message += 'Update Call Tree Entry success.';
          this.dialogRef.close({addSuccess: res, action: this.action, callTreeEntry: this.callTreeEntry});
        } else {
          message += 'Update Call Tree Entry failure.';
        }
        alert(message);
        console.log('action:' + this.action);
      });
    }
}
