import {Component, forwardRef, ViewChild} from '@angular/core';
import {ControlValueAccessor,FormControl,NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import { DivisionService } from 'src/app/services/division.service';
@Component({
  selector: 'app-division-list-input-box',
  templateUrl: './division-list-input-box.component.html',
  styleUrls: ['./division-list-input-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DivisionListInputBoxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DivisionListInputBoxComponent,
      multi: true
    }
  ]
})
export class DivisionListInputBoxComponent implements ControlValueAccessor {
  @ViewChild("division2", { static: true }) control: FormControl;
  divisionList: string[];
  filteredDivisionList: string[];
  division;

  onChange: (value) => {};
  onTouched: () => {};
  constructor(private divisionService: DivisionService) {
    this.divisionService.getActiveDivisionList().subscribe((res: string[]) => {
        this.divisionList = res;
        this.filteredDivisionList = this.divisionList;
    });
  }
  autoCompleteFilter(evt) {
    this.onChange(evt);
    if (!evt) {
      this.filteredDivisionList = this.divisionList;
    } else {
      this.filteredDivisionList = this.divisionList.filter(
        item => item.toLocaleLowerCase().indexOf(evt.toLocaleLowerCase()) >= 0
      );
    }
  }

  writeValue(obj: any) {
    if (obj != null) {
      this.division = obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  validate(c:FormControl) {
    return this.control.errors;
  }
}
