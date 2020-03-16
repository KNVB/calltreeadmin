import { CallTreeEditorComponent } from './call-tree-editor/call-tree-editor.component';
import {CallTreeEntriesListComponent } from './call-tree-entries-list.component';
import { CallTreeEntryEditorComponent } from './call-tree-entry-editor/call-tree-entry-editor.component';
import {CallTreeEntryMaintenanceComponent } from './call-tree-entry-maintenance/call-tree-entry-maintenance.component';
import {CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManualEditorComponent } from './manual-editor/manual-editor.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SafeHtml } from 'src/app/pipes/safe-html.pipe';
import {TextFieldModule} from '@angular/cdk/text-field';
import {UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
                  CallTreeEditorComponent,
                  CallTreeEntriesListComponent,
                  CallTreeEntryEditorComponent,
                  ManualEditorComponent,
                  SafeHtml,
                  CallTreeEntryMaintenanceComponent,
                ],
  entryComponents: [CallTreeEntryMaintenanceComponent ],
  exports: [CallTreeEntriesListComponent,
            UtilityModule],
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
            MatTabsModule,
            ReactiveFormsModule,
            TextFieldModule,
            UtilityModule,
          ]
})
export class CallTreeEntriesListModule { }
