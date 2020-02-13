import { Component,forwardRef, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RichTextEditorComponent),
      multi: true
    }
  ],
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements ControlValueAccessor{
  callTreeDetail;
  @Input('form') form:NgForm;
  ckeditorConfig = {extraPlugins: 'colorbutton',
                    removeButtons: 'BGColor,BulletedList,PasteFromWord,PasteText',
                    toolbarGroups: [
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'paragraph', groups: [ 'list' ] },
                      ]
                    };
  constructor() { }
  onChange: (value) => {};
  onTouched: () => {};
  writeValue(obj: any) {  
    this.callTreeDetail = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  forwardEvent(evt) {
    this.onChange(evt);
  }
}
