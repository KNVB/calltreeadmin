import { CallTree } from 'src/app/classes/CallTree';
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { CallTreeService } from 'src/app/services/call-tree.service';
import {
  Component,
  Input,
  OnInit,
  forwardRef} from '@angular/core';
import {
   ControlValueAccessor,
   FormBuilder,
   FormControl,
   FormGroup,
   NG_VALIDATORS,
   NG_VALUE_ACCESSOR,
   Validator,
   Validators, } from '@angular/forms';
import { OperationResult } from 'src/app/classes/OperationResult';
import * as ClassicEditor from 'src/ckeditor';
@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CallTreeEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CallTreeEditorComponent),
      multi: true,
    }
  ],
  selector: 'app-call-tree-editor',
  styleUrls: ['./call-tree-editor.component.css'],
  templateUrl: './call-tree-editor.component.html',
})
export class CallTreeEditorComponent implements ControlValueAccessor, OnInit {
  @Input () callTree: CallTree;
  callTreeDetail: FormControl;
  callTreeEntryList: CallTreeEntry[];
  callTreeForm: FormGroup;
  callTreeType: FormControl;

  ckeditorConfig = {
    toolbar: ['bold', 'italic',
          'bulletedList',
          'numberedList',
          'fontColor',
          '|', 'outdent', 'indent',
          '|', 'undo', 'redo']
  };
  fontColor: {
    colors: [
        {
            color: 'hsl(0, 0%, 0%)',
            label: 'Black'
        },
        {
            color: 'hsl(0, 0%, 30%)',
            label: 'Dim grey'
        },
        {
            color: 'hsl(0, 0%, 60%)',
            label: 'Grey'
        },
        {
            color: 'hsl(0, 0%, 90%)',
            label: 'Light grey'
        },
        {
            color: 'hsl(0, 0%, 100%)',
            label: 'White',
            hasBorder: true
        },
    ]
  };
  public Editor = ClassicEditor;

  constructor(private callTreeService: CallTreeService,
              private fb: FormBuilder) {
  }
  onCallTreeTypeChange(callTreeType) {
    if (callTreeType === 1) {// new a individual call tree
      this.callTree.callTreeId = -1;
    }
  }
  ngOnInit(): void {
    this.callTreeDetail = new FormControl(this.callTree.callTreeDetail, [Validators.required]);
    this.callTreeType = new FormControl(1, [Validators.required]);
    this.callTreeForm = this.fb.group({});
    this.callTreeForm.addControl('callTreeDetail', this.callTreeDetail);
    this.callTreeForm.addControl('callTreeType', this.callTreeType);

    this.callTreeService.getCallTreeEntryByCallTreeId(this.callTree.callTreeId).subscribe((res: OperationResult) => {
      if (res.success) {
        this.callTreeEntryList = res.returnObj;
      } else {
        alert('Failed to get CallTreeEntry for CallTreeId=' + this.callTree.callTreeId);
      }
    });
  }
  registerOnChange(fn: any) {
    this.callTreeForm.valueChanges.subscribe(fn);
    this.callTreeForm.updateValueAndValidity();
  }

  registerOnTouched(fn: any) {
    this.callTreeForm.statusChanges.subscribe(fn);
    console.log('attributesForm registerOnTouch');
  }
  validate(_: FormControl) {
    console.log('attributesForm.valid=' + this.callTreeForm.valid);
    return this.callTreeForm.valid ? null : { attributesForm: { valid: false, }, };
  }
  writeValue(value: any) {
    console.log('Write Value=' + value);
    value && this.callTreeForm.setValue(value, { emitEvent: false });
  }
}
