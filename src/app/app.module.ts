import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './module/dashboard/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
