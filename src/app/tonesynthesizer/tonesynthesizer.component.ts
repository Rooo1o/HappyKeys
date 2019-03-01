import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tonesynthesizer',
  templateUrl: './tonesynthesizer.component.html',
  styleUrls: ['./tonesynthesizer.component.scss']
})
export class TonesynthesizerComponent implements OnInit {
  public Tone;
  constructor() { }

  ngOnInit() {
    this.Tone = Tone;
    const synth = new this.Tone.Synth().toMaster();
   // synth.triggerAttackRelease('C4', '1m', 0);
    document.querySelector('#c4').addEventListener('click', e => {
      synth.triggerAttack('C4', '1m', 0);
    });
    document.getElementById('c4').addEventListener('click', e => {
      synth.triggerAttackRelease('C4', '1m', 0);
    })

  }

}
