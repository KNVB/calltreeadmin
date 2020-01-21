import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { CallTreeService } from 'src/app/services/call-tree.service';

@Component({
  selector: 'app-contact-id-selector',
  templateUrl: './contact-id-selector.component.html',
  styleUrls: ['./contact-id-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactIdSelectorComponent),
      multi: true
    }
  ]
})
export class ContactIdSelectorComponent implements ControlValueAccessor{
  division: string;
  contactId: number;
  constructor(private callTreeService: CallTreeService) {

  }
  onChange: (value) => {};
  onTouched: () => {};
  writeValue(obj: any) {
    if (obj != null) {
      this.contactId = obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
