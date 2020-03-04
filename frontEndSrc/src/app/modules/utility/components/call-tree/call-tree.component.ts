import { Component,forwardRef, OnInit, Input } from '@angular/core';
import { ControlContainer,  ControlValueAccessor ,NgForm,NG_VALUE_ACCESSOR } from '@angular/forms';
import { CallTree } from 'src/app/classes/CallTree';


@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CallTreeComponent),
      multi: true
    },
  ],
  selector: 'app-call-tree',
  styleUrls: ['./call-tree.component.css'],
  templateUrl: './call-tree.component.html',
  viewProviders:[{
    provide: ControlContainer, useExisting: NgForm
  }]
})
export class CallTreeComponent implements OnInit, ControlValueAccessor  {
  @Input()callTree: CallTree;
  callTreeType = 1;
  ckeditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
                    toolbarGroups: [
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'paragraph', groups: [ 'list' ] },
                      ]
                    };
  sharedCallTreeDetail: string;
  constructor() { }
  onCallTreeTypeChange(callTreeType) {
    if (callTreeType === 1) {// new a individual call tree
      this.callTree.callTreeId = -1;
      this.sharedCallTreeDetail = '';
    }
  }
  onChange = (value) => {};
  onTouched = () => {};
  ngOnInit(): void {
  }
  writeValue(obj: any) {
    if (obj != null) {
      this.callTree = obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
