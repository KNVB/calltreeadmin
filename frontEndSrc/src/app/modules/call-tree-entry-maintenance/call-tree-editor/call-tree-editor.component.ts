import { CallTree } from 'src/app/classes/CallTree';
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeService } from 'src/app/services/call-tree.service';
import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-call-tree-editor',
  templateUrl: './call-tree-editor.component.html',
  styleUrls: ['./call-tree-editor.component.css']
})
export class CallTreeEditorComponent {
  callTree: CallTree;
  callTreeEntryId: number;
  callTreeEntryList: CallTreeEntry[];
  ckeditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
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
                this.callTreeService.getCallTreeEntryByCallTreeId(this.callTree.callTreeId).subscribe((res: CallTreeEntry[]) => {
                  this.callTreeEntryList = res;
                });
              }
  closeDialog() {
    this.dialog.closeAll();
  }
  onSubmit(form: NgForm){
    if (form.valid) {
      this.updateCallTree();
    }
  }
  updateCallTree() {
    this.callTreeService.updateCallTree(this.callTree).subscribe((res: boolean) => {
      this.dialogRef.close({callTree: this.callTree, updateSuccess: res});
    });
  }
}
