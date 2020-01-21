import { CallTreeInfo } from 'src/app/classes/CallTreeInfo';
import { CallTreeInfoService } from 'src/app/services/call-tree-info.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DivisionService } from 'src/app/services/division.service';
import { Manual } from 'src/app/classes/Manual';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-tree-info-editor',
  templateUrl: './call-tree-info-editor.component.html',
  styleUrls: ['./call-tree-info-editor.component.css']
})
export class CallTreeInfoEditorComponent implements OnInit {
  action: string;
  activeCallTree = CallTreeInfo.active;
  inActiveCallTree = CallTreeInfo.inactive;
  callTreeInfo: CallTreeInfo;
  callTreeType = 1;
  serviceLevelList = ['1', '2', '3'];
  sharedCallTreeId: number;
  shareCallTreeInfoList: CallTreeInfo[];
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
                this.action = data.action;
                this.callTreeInfo = data.callTreeInfo;
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
  onSubmit(form: NgForm) {
    console.log('form.dirty=' + form.dirty);
    console.log('form.valid=' + form.valid);
    if (form.pristine && form.valid) {
      this.closeDialog();
    } else {
      if (form.valid) {
        let message = '';
        this.callTreeInfoService.saveCallTreeInfo(this.callTreeInfo).subscribe((res: boolean) => {
          switch (this.action) {
            case 'Add': message = 'Add Call Tree';
                        break;
            case 'Edit': message = 'Update Call Tree';
                         break;
          }
          if (res) {
            message += ' success.';
          } else {
            message += ' failure.';
          }
          alert(message);
          console.log('action:' + this.action);
          this.dialogRef.close({updateSuccess: res, action: this.action, callTree: this.callTreeInfo});
        });
      }
    }
  }
  removeManual(index: number) {
    this.callTreeInfo.manuals.splice(index, 1);
  }
}
