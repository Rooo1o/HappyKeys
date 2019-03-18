import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import * as tonejs from 'tone'
import * as vexflow from 'vexflow'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { VexflowcontentComponent } from './bladmuziekcanvas/bladmuziekcanvas.component'
import { virtuelepianoComponent } from './virtuelepiano/virtuelepiano.component'
import { TonesynthesizerComponent } from './tonesynthesizer/tonesynthesizer.component';
import { LoginComponent } from './login/login.component';
import { RegistreerComponent } from './registreer/registreer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VexflowcontentComponent,
    virtuelepianoComponent,
    TonesynthesizerComponent,
    LoginComponent,
    RegistreerComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
