import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, NgForm,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  providers:
            [
              {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CallTreeEntryEditorComponent),
                multi: true
              },
            ],
  selector: 'app-call-tree-entry-editor',
  styleUrls: ['./call-tree-entry-editor.component.css'],
  templateUrl: './call-tree-entry-editor.component.html',
  viewProviders: [{
    provide: ControlContainer, useExisting: NgForm
  }],
})
export class CallTreeEntryEditorComponent  {
  @Input()callTreeEntry: CallTreeEntry;
  activeCallTreeEntry = CallTreeEntry.active;
  inActiveCallTreeEntry = CallTreeEntry.inactive;
  serviceLevelList = ['1', '2', '3'];
  constructor() { }
}
