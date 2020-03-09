import { NgModule } from '@angular/core';
import {CallTreeEditorComponent} from './call-tree-editor/call-tree-editor.component';
import { CallTreeEntryEditorComponent } from './call-tree-entry-editor/call-tree-entry-editor.component';
import { CallTreeEntryMaintenanceComponent } from './call-tree-entry-maintenance.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { CommonModule , DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManualEditorComponent } from './manual-editor/manual-editor.component';
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
import { SafeHtml } from 'src/app/pipes/safe-html.pipe';
import {TextFieldModule} from '@angular/cdk/text-field';
import {UtilityModule } from '../utility/utility.module';




@NgModule({
  declarations: [
                CallTreeEditorComponent,
                CallTreeEntryEditorComponent,
                CallTreeEntryMaintenanceComponent,
                SafeHtml,
                ManualEditorComponent,
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
            MatTabsModule,
            TextFieldModule,
            UtilityModule,
           ],
  exports: [CallTreeEntryMaintenanceComponent],
  entryComponents: [CallTreeEditorComponent,
                    CallTreeEntryEditorComponent,
                    ManualEditorComponent],
  providers: [DatePipe]
})
export class CallTreeEntryMaintenanceModule { }
