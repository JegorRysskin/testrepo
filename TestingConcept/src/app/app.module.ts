import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    DynamicFormControlComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
