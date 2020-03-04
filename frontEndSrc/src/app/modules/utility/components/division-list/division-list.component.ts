import { Component, forwardRef,Input,OnChanges } from '@angular/core';
import {ControlContainer,ControlValueAccessor,NgForm,NG_VALUE_ACCESSOR,} from '@angular/forms';
import { DivisionService } from 'src/app/services/division.service';
@Component({
  providers: [
                {
                  provide: NG_VALUE_ACCESSOR,
                  useExisting: forwardRef(() => DivisionListComponent),
                  multi: true
                },
              ],
  selector: 'app-division-list',
  styleUrls: ['./division-list.component.css'],
  templateUrl: './division-list.component.html',
  viewProviders:[{
    provide: ControlContainer, useExisting: NgForm
  }]
})
export class DivisionListComponent implements OnChanges , ControlValueAccessor {
  divisionModel: string;
  filteredDivisionList: string[];
  divisionList = [];
  constructor(private divisionService: DivisionService) {
    this.divisionService.getActiveDivisionList().subscribe((res: string[]) => {
      this.divisionList = res;
    });
  }

  ngOnChanges() {
    this.filteredDivisionList = this.divisionList;
  }
  autoCompleteFilter(evt: string) {
    this.onChange(evt);
    if (!evt) {
      this.filteredDivisionList = this.divisionList;
    } else {
      this.filteredDivisionList = this.divisionList.filter(
        item => item.toLocaleLowerCase().indexOf(evt.toLocaleLowerCase()) >= 0
      );
    }
  }
  onChange = (value) => {};
  onTouched = () => {};

  writeValue(obj: any) {
    if (obj != null){
      this.divisionModel = obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
