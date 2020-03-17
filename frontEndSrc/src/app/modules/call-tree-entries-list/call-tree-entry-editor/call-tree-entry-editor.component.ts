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
import { CallTreeEntry } from 'src/app/classes/CallTreeEntry';
import { divisionNameValidator } from '../../utility/validator/division-name.validator';
import { DivisionService } from 'src/app/services/division.service';
import {Observable} from 'rxjs';
import { OperationResult } from 'src/app/classes/OperationResult';
import {startWith, map} from 'rxjs/operators';

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CallTreeEntryEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CallTreeEntryEditorComponent),
      multi: true,
    }
  ],
  selector: 'app-call-tree-entry-editor',
  styleUrls: ['./call-tree-entry-editor.component.css'],
  templateUrl: './call-tree-entry-editor.component.html',

})
export class CallTreeEntryEditorComponent implements ControlValueAccessor, OnInit {
  @Input () callTreeEntry: CallTreeEntry;
  callTreeEntryForm: FormGroup;
  callTreeEntryId: FormControl;
  division: FormControl;
  location: FormControl;
  logRecipients: FormControl;
  missionCritical: FormControl;
  serviceLevel: FormControl;
  status: FormControl;
  systemName: FormControl;
  timeToStartProcedure: FormControl;
  timeToEscalate: FormControl;

  divisionList: string[];
  filteredDivisionList: Observable<string[]>;
  activeCallTreeEntry = CallTreeEntry.active;
  inActiveCallTreeEntry = CallTreeEntry.inactive;
  serviceLevelList = [1, 2, 3];
  constructor(private fb: FormBuilder,
              private divisionService: DivisionService) {
  }

  ngOnInit(): void {
    this.callTreeEntryId = new FormControl(this.callTreeEntry.callTreeEntryId, []);
    this.division = new FormControl(this.callTreeEntry.division, []);
    this.location = new FormControl(this.callTreeEntry.location, [Validators.required]);
    this.logRecipients = new FormControl(this.callTreeEntry.logRecipients, [Validators.required]);
    this.missionCritical = new FormControl(this.callTreeEntry.missionCritical, [Validators.required]);
    this.serviceLevel = new FormControl(this.callTreeEntry.serviceLevel);
    this.status = new  FormControl(this.callTreeEntry.status, [Validators.required]);
    this.systemName = new FormControl(this.callTreeEntry.systemName, [Validators.required]);

    this.timeToEscalate = new FormControl(this.callTreeEntry.timeToEscalate, [Validators.required]);
    this.timeToStartProcedure = new FormControl(this.callTreeEntry.timeToStartProcedure, [Validators.required]);
    this.callTreeEntryForm = this.fb.group({
                                        callTreeEntryId: this.callTreeEntryId,
                                        division: this.division,
                                        location: this.location,
                                        logRecipients: this.logRecipients,
                                        missionCritical: this.missionCritical,
                                        serviceLevel: this.serviceLevel,
                                        status: this.status,
                                        systemName: this.systemName,
                                        timeToEscalate: this.timeToEscalate,
                                        timeToStartProcedure: this.timeToStartProcedure
                                      });

    this.divisionService.getActiveDivisionList().subscribe((res: OperationResult) => {
      if (res.success) {
        this.divisionList = res.returnObj;
        this.division.setValidators([Validators.required, divisionNameValidator(this.divisionList)]);
        this.filteredDivisionList =  this.division.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      } else {
        alert('Failed to get the active division list');
      }
    });
    console.log('callTreeEntryForm init');
  }
  private _filter(value: string): string[] {
    console.log('value=' + value);
    const filterValue = this._normalizeValue(value);
    console.log('filterValue=' + filterValue);
    const result = this.divisionList.filter(division => this._normalizeValue(division).includes(filterValue));
    console.log('result=' + result);
    return result;
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  registerOnChange(fn: any) {
    this.callTreeEntryForm.valueChanges.subscribe(fn);
    this.callTreeEntryForm.updateValueAndValidity();
  }

  registerOnTouched(fn: any) {
    this.callTreeEntryForm.statusChanges.subscribe(fn);
    console.log('callTreeEntryForm registerOnTouch');
  }
  validate(_: FormControl) {
    console.log('callTreeEntryForm Form.valid=' + this.callTreeEntryForm.valid);
    return this.callTreeEntryForm.valid ? null : { callTreeEntryForm: { valid: false, }, };
  }
  writeValue(value: any) {
    console.log('callTreeEntryForm Write Value=' + value);
    value && this.callTreeEntryForm.setValue(value, { emitEvent: false });
  }
}
