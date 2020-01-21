import { CallTreeInfoEditorComponent } from './call-tree-info-editor/call-tree-info-editor.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { CommonModule, DatePipe} from '@angular/common';
import { EditCallTreeInfoComponent } from './edit-call-tree-info.component';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { SafeHtml } from 'src/app/pipes/safe-html.pipe';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [
                  EditCallTreeInfoComponent,
                  CallTreeInfoEditorComponent,
                  SafeHtml,
                ],
  imports: [
    CommonModule,
    CKEditorModule,
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
    UtilityModule,
  ],
  entryComponents: [CallTreeInfoEditorComponent],
  exports: [EditCallTreeInfoComponent],
  providers: [DatePipe]
})
export class EditCallTreeInfoModule { }
