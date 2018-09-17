import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NursesComponent } from './nurses/nurses.component';
import { NurseProfileComponent } from './nurse-profile/nurse-profile.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

// Bootstrap Modules
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NursesComponent,
    NurseProfileComponent,
    NewPatientComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'nurses' , component: NursesComponent},
      {path: 'nurse/:userid' , component: NurseProfileComponent},
      {path: 'new-patient' , component: NewPatientComponent},
      {path: '**' , component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
