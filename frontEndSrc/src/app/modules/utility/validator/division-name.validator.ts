import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
export function divisionNameValidator(divisionList: string[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let result = null;
    if ((control.dirty) && (control.valid)) {
      for (const division of divisionList) {
        if (division === control.value) {
          result = null;
          break;
        } else {
          result = {invalidDivisionName : control.value};
        }
      }
    }
    return result;
  };
}
