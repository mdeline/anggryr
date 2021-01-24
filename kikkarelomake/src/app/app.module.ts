import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { DirectivesStudyComponent } from './directives-study/directives-study.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    DirectivesStudyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
