import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './registreer.component';

const routes: Routes = [
  { path: 'registreer', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:  [
    RouterModule
  ]
})
export class RegistreerRoutingModule { }
