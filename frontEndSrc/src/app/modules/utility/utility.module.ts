import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ckeditor4-angular';
import { ConfirmationBoxComponent } from './components/confirmation-box/confirmation-box.component';
import { DivisionListInputBoxComponent } from './components/division-list-input-box/division-list-input-box.component';
import { DivisionValidatorDirective } from './directives/division-validator.directive';
import { FormsModule } from '@angular/forms';
import { LogRecipientValidatorDirective } from './directives/log-recipient-validator.directive';
import {ManualListComponent} from './components/manual-list/manual-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import {SystemNameValidatorDirective} from './directives/system-name-validator.directive';

@NgModule({
  declarations: [
                  ConfirmationBoxComponent,
                  DivisionListInputBoxComponent,
                  DivisionValidatorDirective,
                  LogRecipientValidatorDirective,
                  ManualListComponent,
                  SystemNameValidatorDirective,
                  RichTextEditorComponent,
                ],
  imports: [
    CKEditorModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
  ],
  entryComponents: [ConfirmationBoxComponent, DivisionListInputBoxComponent],
  exports: [
            ConfirmationBoxComponent,
            DivisionListInputBoxComponent,
            DivisionValidatorDirective,
            LogRecipientValidatorDirective,
            ManualListComponent,
            RichTextEditorComponent,
            SystemNameValidatorDirective,
          ]
})
export class UtilityModule { }
