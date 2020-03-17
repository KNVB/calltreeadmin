import {
        Component,
        forwardRef,
        Input,
        OnInit } from '@angular/core';
import { Manual } from 'src/app/classes/Manual';
import {
          ControlValueAccessor,
          FormArray,
          FormBuilder,
          FormControl,
          FormGroup,
          NG_VALIDATORS,
          NG_VALUE_ACCESSOR,
          Validators,
        } from '@angular/forms';

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ManualEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ManualEditorComponent),
      multi: true,
    }
  ],
  selector: 'app-manual-editor',
  styleUrls: ['./manual-editor.component.css'],
  templateUrl: './manual-editor.component.html',
})
export class ManualEditorComponent implements ControlValueAccessor, OnInit {
  @Input() manuals: Manual[];
  @Input() callTreeEntryId: number;
  manualsForm: FormGroup;
  manualItemList: FormArray;
  message: string;
  constructor(private fb: FormBuilder) {
    this.manualItemList = this.fb.array([]);
    this.manualsForm =  this.fb.group({manualItemList: this.manualItemList});

  }
  addManual() {

  }
  ngOnInit(): void {
    for (const manual of this.manuals) {
      const manualItem = new FormGroup({});
      manualItem.addControl('description', new FormControl(manual.description, [Validators.required]));
      manualItem.addControl('manualLocation', new FormControl(manual.manualLocation, [Validators.required]));
      this.manualItemList.push(manualItem);
    }
    console.log(this.manualsForm);
  }
  registerOnChange(fn: any) {
    this.manualsForm.valueChanges.subscribe(fn);
    this.manualsForm.updateValueAndValidity();
  }

  registerOnTouched(fn: any) {
    this.manualsForm.statusChanges.subscribe(fn);
    console.log('manualsForm registerOnTouch');
  }
  validate(_: FormControl) {
    console.log('manualsForm Form.valid=' + this.manualsForm.valid);
    return this.manualsForm.valid ? null : { manualsForm: { valid: false, }, };
  }
  writeValue(value: any) {
    console.log('manualsForm Value=' + value);
    value && this.manualsForm.setValue(value, { emitEvent: false });
  }
}
