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
  }
  addManual() {
    const manualTemplate =new Manual();
    this.addManualItem(manualTemplate);
  }
  addManualItem(manualObject: Manual) {
    const manualItem = new FormGroup({});
    manualItem.addControl('manualId', new FormControl(manualObject.manualId, []));
    manualItem.addControl('description', new FormControl(manualObject.description, [Validators.required]));
    manualItem.addControl('manualLocation', new FormControl(manualObject.manualLocation, [Validators.required]));
    manualItem.addControl('lastUpdateDate', new FormControl(manualObject.lastUpdateDate, [Validators.required]));
    this.manualItemList.push(manualItem);
  }
  ngOnInit(): void {
    for (const manual of this.manuals) {
      this.addManualItem(manual);
    }
    this.manualsForm =  this.fb.group({manualItemList: this.manualItemList});
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
  removeManual(i: number) {
    this.manualItemList.removeAt(i);
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
