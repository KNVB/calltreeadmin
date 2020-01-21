import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditCallTreeInfoModule } from './modules/edit-call-tree-info/edit-call-tree-info.module';
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
    EditCallTreeInfoModule,
    FormsModule,
    HttpClientModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
