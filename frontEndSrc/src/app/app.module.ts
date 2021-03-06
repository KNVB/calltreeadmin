import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UtilityModule } from './modules/utility/utility.module';
import { CallTreeEntriesListModule } from './modules/call-tree-entries-list/call-tree-entries-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CallTreeEntriesListModule,
    FormsModule,
    HttpClientModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
