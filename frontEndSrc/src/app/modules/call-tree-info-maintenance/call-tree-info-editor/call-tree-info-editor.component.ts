import { CallTreeInfo } from 'src/app/classes/CallTreeInfo';
import { CallTreeInfoService } from 'src/app/services/call-tree-info.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DivisionService } from 'src/app/services/division.service';
import { Manual } from 'src/app/classes/Manual';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SharedCallTree } from 'src/app/classes/SharedCallTree';

@Component({
  selector: 'app-call-tree-info-editor',
  templateUrl: './call-tree-info-editor.component.html',
  styleUrls: ['./call-tree-info-editor.component.css']
})
export class CallTreeInfoEditorComponent implements OnInit {
  action: string;
  activeCallTree = CallTreeInfo.active;
  inActiveCallTree = CallTreeInfo.inactive;
  callTreeInfo: CallTreeInfo = null;
  callTreeType = 1;
  divisionToSystem = [];
  systemToCalltree = [];
  serviceLevelList = ['1', '2', '3'];

  sharedCallTreeId: number;
  sharedDivision: string;
  sharedDivisionList: string[];
  sharedCallTreeDetail: string;
  sharedSystemNameList: string[];
  ckeditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BulletedList,PasteFromWord,PasteText',
                    toolbarGroups: [
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'paragraph', groups: [ 'list' ] },
                      ]
                    };
  constructor(private callTreeInfoService: CallTreeInfoService,
              private divisionService: DivisionService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<CallTreeInfoEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                const callTreeInfoId = data.callTreeInfoId;
                this.action = data.action;
                if ( callTreeInfoId === -1) {
                  this.callTreeInfo = new CallTreeInfo();
                }
                data.callTreeInfoList.forEach((sharedCallTreeInfo: CallTreeInfo) => {
                  if ( callTreeInfoId > -1) {
                    if (sharedCallTreeInfo.callTreeInfoId === callTreeInfoId) {
                      this.callTreeInfo = sharedCallTreeInfo;
                    }
                  }
                  if (!this.divisionToSystem.hasOwnProperty(sharedCallTreeInfo.division)) {
                    this.divisionToSystem[sharedCallTreeInfo.division] = [];
                  }
                  this.divisionToSystem[sharedCallTreeInfo.division].push(sharedCallTreeInfo.systemName);

                  if (!this.systemToCalltree.hasOwnProperty(sharedCallTreeInfo.systemName)) {
                    this.systemToCalltree[sharedCallTreeInfo.systemName] = [];
                  }
                  this.systemToCalltree[sharedCallTreeInfo.systemName] = sharedCallTreeInfo.callTree;
                });
                this.sharedDivisionList = Object.keys(this.divisionToSystem);
                console.log(this.systemToCalltree);
                console.log(this.divisionToSystem);
              }
  addCallInfo() {
    let message = '';
    this.callTreeInfoService.addCallTreeInfo(this.callTreeInfo).subscribe((res: boolean) => {
      if (res) {
        message += 'Add Call Tree success.';
        this.dialogRef.close({addSuccess: res, action: this.action, callTreeInfo: this.callTreeInfo});
      } else {
        message += 'Add Call Tree failure.';
      }
      alert(message);
      console.log('action:' + this.action);
    });
  }
  addManual() {
    const manual = new Manual();
    this.callTreeInfo.manuals.push(manual);
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  ngOnInit() {
  }
  onCallTreeTypeChange(callTreeType) {
    if (callTreeType === 1) {// new a individual call tree
      this.callTreeInfo.callTree.callTreeId = -1;
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
          case 'Add': this.addCallInfo();
                      break;
          case 'Edit': this.updateCallInfo();
                       break;
        }
      }
    }
  }
  removeManual(index: number) {
    this.callTreeInfo.manuals.splice(index, 1);
  }
  updateCallTreeDetail(event) {
    const target = event.source.selected._element.nativeElement;
    const systemName = target.innerText.trim();
    this.sharedCallTreeDetail = this.systemToCalltree[systemName].callTreeDetail;
    this.sharedCallTreeDetail = this.sharedCallTreeDetail.replace(/<br \/>/g, '');
  }
  updateCallInfo() {
    let message = '';
    this.callTreeInfoService.updateCallTreeInfo(this.callTreeInfo).subscribe((res: boolean) => {
      if (res) {
        message += 'Update Call Tree success.';
        this.dialogRef.close({addSuccess: res, action: this.action, callTreeInfo: this.callTreeInfo});
      } else {
        message += 'Update Call Tree failure.';
      }
      alert(message);
      console.log('action:' + this.action);
    });
  }
}
