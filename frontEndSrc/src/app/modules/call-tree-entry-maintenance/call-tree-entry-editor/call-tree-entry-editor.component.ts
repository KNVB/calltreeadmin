import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeEntryService } from 'src/app/services/call-tree-entry.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Manual } from 'src/app/classes/Manual';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-call-tree-entry-editor',
  templateUrl: './call-tree-entry-editor.component.html',
  styleUrls: ['./call-tree-entry-editor.component.css']
})
export class CallTreeEntryEditorComponent implements OnInit {
  action: string;
  activeCallTreeEntry = CallTreeEntry.active;
  inActiveCallTreeEntry = CallTreeEntry.inactive;
  callTreeEntry: CallTreeEntry = null;
  callTreeType = 1;
  divisionToSystem = [];
  systemToCalltree = [];
  serviceLevelList = ['1', '2', '3'];

  sharedCallTreeId: number;
  sharedDivision: string;
  sharedDivisionList: string[];
  sharedCallTreeDetail: string;
  sharedSystemNameList: string[];
  callTreeDetailEditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
                    toolbarGroups: [
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'paragraph', groups: [ 'list' ] },
                      ]
                    };
  constructor(private callTreeInfoService: CallTreeEntryService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<CallTreeEntryEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                const callTreeEntryId = data.callTreeEntryId;
                this.action = data.action;
                if ( callTreeEntryId === -1) {
                  this.callTreeEntry = new CallTreeEntry();
                }
                data.callTreeInfoList.forEach((sharedCallTreeEntry: CallTreeEntry) => {
                  if ( callTreeEntryId > -1) {
                    if (sharedCallTreeEntry.callTreeEntryId === callTreeEntryId) {
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
                this.sharedDivisionList = Object.keys(this.divisionToSystem);
                console.log(this.systemToCalltree);
                console.log(this.divisionToSystem);
              }
  addCallTreeEntry() {
    let message = '';
    this.callTreeInfoService.addCallTreeInfo(this.callTreeEntry).subscribe((res: number) => {
      if (res > -1) {
        message += 'Add Call Tree Entry success.';
        this.callTreeEntry.callTreeEntryId = res;
        this.dialogRef.close({addSuccess: res, action: this.action, callTreeInfo: this.callTreeEntry});
      } else {
        message += 'Add Call Tree Entry failure.';
      }
      alert(message);
      console.log('action:' + this.action);
    });
  }
  addManual() {
    const manual = new Manual();
    this.callTreeEntry.manuals.push(manual);
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  ngOnInit() {
  }
  onCallTreeTypeChange(callTreeType) {
    if (callTreeType === 1) {// new a individual call tree
      this.callTreeEntry.callTree.callTreeId = -1;
      this.sharedCallTreeDetail = '';
    }
  }
  onSharedDivisionChange(division) {
    this.sharedSystemNameList = this.divisionToSystem[division];
  }
  onSubmit(form: NgForm) {
    console.log('form.dirty=' + form.dirty);
    console.log('form.valid=' + form.valid);
    if (form.pristine && form.valid) {
      this.closeDialog();
    } else {
      if (form.valid) {

        switch (this.action) {
          case 'Add': this.addCallTreeEntry();
                      break;
          case 'Edit': this.updateCallTreeEntry();
                       break;
        }
      }
    }
  }
  removeManual(index: number) {
    this.callTreeEntry.manuals.splice(index, 1);
  }
  updateCallTreeDetail(event) {
    const target = event.source.selected._element.nativeElement;
    const systemName = target.innerText.trim();
    this.sharedCallTreeDetail = this.systemToCalltree[systemName].callTreeDetail;
    this.sharedCallTreeDetail = this.sharedCallTreeDetail.replace(/<br \/>/g, '');
  }
  updateCallTreeEntry() {
    let message = '';
    this.callTreeInfoService.updateCallTreeInfo(this.callTreeEntry).subscribe((res: boolean) => {
      if (res) {
        message += 'Update Call Tree Entry success.';
        this.dialogRef.close({addSuccess: res, action: this.action, callTreeInfo: this.callTreeEntry});
      } else {
        message += 'Update Call Tree Entry failure.';
      }
      alert(message);
      console.log('action:' + this.action);
    });
  }
}
