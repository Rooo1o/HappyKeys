import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import * as tonejs from 'tone';
import * as vexflow from 'vexflow'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { virtuelepianoComponent } from './virtuelepiano/virtuelepiano.component'
import { TonesynthesizerComponent } from './tonesynthesizer/tonesynthesizer.component';
import { LoginComponent } from './login/login.component';
import { RegistreerComponent } from './registreer/registreer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    virtuelepianoComponent,
    TonesynthesizerComponent,
    LoginComponent,
    RegistreerComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
