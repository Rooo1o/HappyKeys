import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-virtualpiano',
  templateUrl: './virtualpiano.component.html',
  styleUrls: ['./virtualpiano.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class VirtualpianoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.generatePiano();
    this.generateKeyboard();
  }


  generatePiano() {
    let div = document.getElementById('piano');
    let whitekeyWidth = parseFloat((100 / 52).toFixed(10));
    let blackkeyWidth = (whitekeyWidth * 0.7);


    for (let w = 0; w < 52; w++) { //52 witte toetsen
      let pianokey = document.createElement('div');
      pianokey.classList.add('border', 'border-dark', 'rounded-bottom', 'd-inline-block', 'whitekey');
      pianokey.style.minWidth = whitekeyWidth + '%';
      div.appendChild(pianokey);
    }

    let asharp = document.createElement('div');
    asharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
    asharp.id = 'c4';
    asharp.style.minWidth = blackkeyWidth + '%';
    asharp.style.marginLeft = (whitekeyWidth * 0.66) + '%';
    div.appendChild(asharp);

    let offset = whitekeyWidth;
    offset *= 1.9; //na de eerste zwarte toets
    for (let z = 0; z < 7; z++) {
      let csharp = document.createElement('div');
      csharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      csharp.style.minWidth = blackkeyWidth + '%';
      csharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75;
      div.appendChild(csharp);

      offset += whitekeyWidth;

      let dsharp = document.createElement('div');
      dsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      dsharp.style.minWidth = blackkeyWidth + '%';
      dsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75;
      div.appendChild(dsharp);

      offset += whitekeyWidth * 2;

      let fsharp = document.createElement('div');
      fsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      fsharp.style.minWidth = blackkeyWidth + '%';
      fsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75;
      div.appendChild(fsharp);

      offset += whitekeyWidth;

      let gsharp = document.createElement('div');
      gsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      gsharp.style.minWidth = blackkeyWidth + '%';
      gsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75;
      div.appendChild(gsharp);

      offset += whitekeyWidth;

      let asharp = document.createElement('div');
      asharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      asharp.style.minWidth = blackkeyWidth + '%';
      asharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75;
      div.appendChild(asharp);

      offset += whitekeyWidth * 2;
    }
  }

  generateKeyboard() {
    let divkeyboard = document.getElementById('keyboard');
    let whitekeyWidth = parseFloat((100 / 35).toFixed(10));
    let blackkeyWidth = (whitekeyWidth * 0.6);

    for (let w = 0; w < 35; w++) { //52 witte toetsen
      let pianokey = document.createElement('div');
      pianokey.classList.add('border', 'border-dark', 'rounded-bottom', 'd-inline-block', 'whitekey');
      pianokey.style.minWidth = whitekeyWidth + '%';
      divkeyboard.appendChild(pianokey);
    }

    let offset = 0;
    for (let z = 0; z < 5; z++) {
      let csharp = document.createElement('div');
      csharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.76;
      csharp.style.minWidth = blackkeyWidth + '%';
      csharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75
      divkeyboard.appendChild(csharp);

      offset += whitekeyWidth;

      let dsharp = document.createElement('div');
      dsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      dsharp.style.minWidth = blackkeyWidth + '%';
      dsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75
      divkeyboard.appendChild(dsharp);

      offset += whitekeyWidth * 2;

      let fsharp = document.createElement('div');
      fsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      fsharp.style.minWidth = blackkeyWidth + '%';
      fsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75
      divkeyboard.appendChild(fsharp);

      offset += whitekeyWidth;

      let gsharp = document.createElement('div');
      gsharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      gsharp.style.minWidth = blackkeyWidth + '%';
      gsharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75
      divkeyboard.appendChild(gsharp);

      offset += whitekeyWidth;

      let asharp = document.createElement('div');
      asharp.classList.add('border', 'border-top-0', 'border-dark', 'blackkey');
      offset += whitekeyWidth * 0.75;
      asharp.style.minWidth = blackkeyWidth + '%';
      asharp.style.marginLeft = offset + '%';
      offset -= whitekeyWidth * 0.75
      divkeyboard.appendChild(asharp);

      offset += whitekeyWidth * 2;
    }
  }
}