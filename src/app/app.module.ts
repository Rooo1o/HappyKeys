import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import * as tonejs from 'tone';

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { virtuelepianoComponent } from './virtuelepiano/virtuelepiano.component'
import { TonesynthesizerComponent } from './tonesynthesizer/tonesynthesizer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TetrominocomponentComponent } from './tetromino/tetromino.component';
import { TetriscanvascomponentComponent } from './tetriscanvas/tetriscanvas.component';

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
