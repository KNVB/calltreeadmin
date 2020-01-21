import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { CallTreeService } from 'src/app/services/call-tree.service';
@Component({
  selector: 'app-division-list-input-box',
  templateUrl: './division-list-input-box.component.html',
  styleUrls: ['./division-list-input-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DivisionListInputBoxComponent),
      multi: true
    }
  ]
})
export class DivisionListInputBoxComponent implements ControlValueAccessor {
  divisionList: string[];
  filteredDivisionList: string[];
  division;

  onChange: (value) => {};
  onTouched: () => {};
  constructor(private callTreeService: CallTreeService) {
    this.callTreeService.getActiveDivisionList().subscribe((res: string[]) => {
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
}
