import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { SchoolRegistrationComponent } from './school-registration/school-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchoolService } from './school.service';
import { SchoolRegFormComponent } from './school-reg-form/school-reg-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SchoolRegistrationComponent,
    PageNotFoundComponent,
    SchoolRegFormComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
