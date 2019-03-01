import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import * as tonejs from 'tone';
import * as vexflow from 'vexflow';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VexflowcontentComponent } from './vexflowcontent/vexflowcontent.component';
import { VirtualpianoComponent } from './virtualpiano/virtualpiano.component';
import { TonesynthesizerComponent } from './tonesynthesizer/tonesynthesizer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VexflowcontentComponent,
    VirtualpianoComponent,
    TonesynthesizerComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
