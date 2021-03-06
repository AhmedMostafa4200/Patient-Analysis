import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { PatientService } from './patient/patient.service';
const appRoutes: Routes=[
  {path: "patients/:id", component: PatientComponent},
  {path: '**', redirectTo:"/patients/1"},
]
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
  ],
  imports: [
BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
