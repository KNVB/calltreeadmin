import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallTreeEntryMaintenanceModule } from './modules/call-tree-entry-maintenance/call-tree-entry-maintenance.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UtilityModule } from './modules/utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    CallTreeEntryMaintenanceModule,
    FormsModule,
    HttpClientModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
