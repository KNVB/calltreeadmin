import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[systemNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: SystemNameValidatorDirective, multi: true}]
})
export class SystemNameValidatorDirective implements Validator{
  @Input('systemNameValidator') systemNameList: string[];
  constructor() { }
  validate(control: AbstractControl): {[key: string]: any}|null {
    let result = null;
    if ((control.dirty) && (control.valid)) {
      for (const systemName of this.systemNameList) {
        if (systemName === control.value) {
          result = null;
          break;
        } else {
          result = {invalidSystemName : control.value};
        }
      }
    }
    return result;
  }
}
