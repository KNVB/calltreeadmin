import { Directive, Input, Renderer2} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';
@Directive({
  selector: '[appLogRecipientValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LogRecipientValidatorDirective, multi: true}]
})
export class LogRecipientValidatorDirective implements Validator  {
  @Input('appLogRecipientValidator') logRecipients: string;

  constructor(private renderer2: Renderer2) { }

  validate(control: AbstractControl): {[key: string]: any}|null {
    if ((control.dirty) && (control.valid)) {
      const logRecipients = control.value.trim().split('\n');
      const tempBox = this.renderer2.createElement('input');
      let result = null;
      let invalidEmailAddress = '';
      tempBox.type = 'text';

      for (const logRecipient of logRecipients) {
        tempBox.value = logRecipient;
        result = (Validators.email(tempBox));
        // console.log(logRecipient + ',' + result);
        if (result != null) {
          invalidEmailAddress = logRecipient;
          break;
        }
      }
      // console.log('Return :' + result);
      if (result != null) {
        result = {email: invalidEmailAddress };
      }
      return result;
    } else {
      // console.log('Return null');
      return null;
    }
  }


}
