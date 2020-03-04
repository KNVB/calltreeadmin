import { Component,forwardRef, Input } from '@angular/core';

import { ControlContainer, NgForm,NG_VALUE_ACCESSOR } from '@angular/forms';
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';

@Component({
  providers:
            [
              {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CallTreeEntryComponent),
                multi: true
              },
            ],
  selector: 'app-call-tree-entry',
  styleUrls: ['./call-tree-entry.component.css'],
  templateUrl: './call-tree-entry.component.html',
  viewProviders: [{
    provide: ControlContainer, useExisting: NgForm
  }]

})
export class CallTreeEntryComponent {
  @Input()callTreeEntry: CallTreeEntry;
  activeCallTreeEntry = CallTreeEntry.active;
  inActiveCallTreeEntry = CallTreeEntry.inactive;
  serviceLevelList = ['1', '2', '3'];
  constructor() {

  }
}
