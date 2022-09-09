import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    LoginRoutingModule,
    MatSliderModule,
    MatIconModule
  ],
})
export class LoginModule { }
