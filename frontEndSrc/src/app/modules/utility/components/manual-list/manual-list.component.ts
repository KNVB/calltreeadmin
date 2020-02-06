import { Component,forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Manual } from 'src/app/classes/Manual';
@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManualListComponent),
      multi: true
    }
  ]
})
export class ManualListComponent implements ControlValueAccessor {
  manuals: Manual[];
  @Input ('message') message: string;
  constructor() { 

  }
  onChange: (value) => {};
  onTouched: () => {};
  writeValue(obj: any) {  
    if (obj != null) {
      this.manuals = obj;
    }  
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  addManual() {
    const manual = new Manual();
    if (this.manuals === null) {
      this.manuals=[];
    }
    this.manuals.push(manual);
  }
  removeManual(index: number) {
    this.manuals.splice(index, 1);
  }
}
