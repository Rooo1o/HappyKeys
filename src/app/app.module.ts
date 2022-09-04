import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import * as tonejs from 'tone';

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { virtuelepianoComponent } from './pianomodule/virtuelepiano/virtuelepiano.component'
import { TonesynthesizerComponent } from './pianomodule/tonesynthesizer/tonesynthesizer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registermodule/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TetrominocomponentComponent } from './tetrismodule/tetromino.component';
import { TetriscanvascomponentComponent } from './tetrismodule/tetriscanvas/tetriscanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    virtuelepianoComponent,
    TonesynthesizerComponent,
    LoginComponent,
    RegisterComponent,
    TetrominocomponentComponent,
    TetriscanvascomponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
