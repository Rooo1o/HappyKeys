import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonesynthesizerComponent } from './tonesynthesizer/tonesynthesizer.component';
import { VirtuelepianoComponent } from './virtuelepiano/virtuelepiano.component';



@NgModule({
  declarations: [
    TonesynthesizerComponent,
    VirtuelepianoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PianoModule { }
