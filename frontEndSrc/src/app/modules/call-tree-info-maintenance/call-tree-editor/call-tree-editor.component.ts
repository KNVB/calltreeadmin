import { CallTree } from 'src/app/classes/CallTree';
import { CallTreeService } from 'src/app/services/call-tree.service';
import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { CallTreeInfo } from 'src/app/classes/CallTreeInfo';


@Component({
  selector: 'app-call-tree-editor',
  templateUrl: './call-tree-editor.component.html',
  styleUrls: ['./call-tree-editor.component.css']
})
export class CallTreeEditorComponent {
  callTree: CallTree;
  callTreeInfoList: CallTreeInfo[];
  ckeditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BulletedList,PasteFromWord,PasteText',
                    toolbarGroups: [
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'paragraph', groups: [ 'list' ] },
                      ]
                    };
  constructor(private callTreeService: CallTreeService,
              public dialog: MatDialog,
              private dialogRef: MatDialogRef<CallTreeEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.callTree = data.callTree;
                this.callTreeService.getCallTreeInfoByCallTreeId(this.callTree.callTreeId).subscribe((res: CallTreeInfo[]) => {
                  this.callTreeInfoList = res;
                });
              }
  closeDialog() {
    this.dialog.closeAll();
  }
}
