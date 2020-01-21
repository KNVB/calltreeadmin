import { Directive, Input  } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[divisionValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DivisionValidatorDirective, multi: true}]
})
export class DivisionValidatorDirective implements Validator {
  @Input('divisionValidator') divisionList: string[];
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any}|null {
    let result = null;
    if ((control.dirty) && (control.valid)) {
      for (const division of this.divisionList) {
        if (division === control.value) {
          result = null;
          break;
        } else {
          result = {invalidDivisionName : control.value};
        }
      }
    }
    return result;
  }
}
