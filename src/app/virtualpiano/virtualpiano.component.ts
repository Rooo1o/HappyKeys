import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import * as Tone from 'tone'
import { StaticSymbolResolver } from '@angular/compiler'
declare var SampleLibrary: any;

@Component({
  selector: 'app-virtualpiano',
  templateUrl: './virtualpiano.component.html',
  styleUrls: ['./virtualpiano.component.scss',],
  encapsulation: ViewEncapsulation.None
})

export class VirtualpianoComponent implements OnInit {
  public synth
  public MidiNoten
  public GespeeldeNoten
  public samples
  public instruments
  constructor() {
  
    this.synth = SampleLibrary.load({
      instruments: "piano", 
      ext: ".ogg"
    }).toMaster()

    console.log(window.location.href)
    this.MidiNoten = {
      21: 'a0', 22: 'a#0', 23: 'b0',
      24: 'c1', 25: 'c#1', 26: 'd1', 27: 'd#1', 28: 'e1', 29: 'f1', 30: 'f#1', 31: 'g1', 32: 'g#1', 33: 'a1', 34: 'a#1', 35: 'b1',
      36: 'c2', 37: 'c#2', 38: 'd2', 39: 'd#2', 40: 'e2', 41: 'f2', 42: 'f#2', 43: 'g2', 44: 'g#2', 45: 'a2', 46: 'a#2', 47: 'b2',
      48: 'c3', 49: 'c#3', 50: 'd3', 51: 'd#3', 52: 'e3', 53: 'f3', 54: 'f#3', 55: 'g3', 56: 'g#3', 57: 'a3', 58: 'a#3', 59: 'b3',
      60: 'c4', 61: 'c#4', 62: 'd4', 63: 'd#4', 64: 'e4', 65: 'f4', 66: 'f#4', 67: 'g4', 68: 'g#4', 69: 'a4', 70: 'a#4', 71: 'b4',
      72: 'c5', 73: 'c#5', 74: 'd5', 75: 'd#5', 76: 'e5', 77: 'f5', 78: 'f#5', 79: 'g5', 80: 'g#5', 81: 'a5', 82: 'a#5', 83: 'b5',
      84: 'c6', 85: 'c#6', 86: 'd6', 87: 'd#6', 88: 'e6', 89: 'f6', 90: 'f#6', 91: 'g6', 92: 'g#6', 93: 'a6', 94: 'a#6', 95: 'b6',
      96: 'c7', 97: 'c#7', 98: 'd7', 99: 'd#7', 100: 'e7', 101: 'f7', 102: 'f#7', 103: 'g7', 104: 'g#7', 105: 'a7', 106: 'a#7', 107: 'b7',
      108: 'c8'
    }
    this.GespeeldeNoten = new Array<string>()
  }

  ngOnInit() {

    this.generateKeyboard()
    this.generatePiano()
    this.generateXylophone()
  }

  generatePiano() {
    let div = document.getElementById('piano')
    let breedteWittetoets = (100 / 52)
    let offset = breedteWittetoets

    for (let t = 21; t <= 108; t++) {
      let noot = this.MidiNoten[t]
      if (!(noot.charAt(1) === '#')) {
        div.appendChild(this.maakToets(noot, breedteWittetoets))
      } else {
        div.appendChild(this.maakToets(noot, breedteWittetoets, offset))
        noot != 'a#0' && (noot.charAt(0) === 'd' || noot.charAt(0) === 'a') ? offset += breedteWittetoets * 2 : offset += breedteWittetoets
      }
    }
  }

  generateKeyboard() {
    let div = document.getElementById('keyboard')
    let breedteWittetoets = parseFloat((100 / 35).toFixed(10))
    let offset = 0
    for (let k = 36; k <= 95; k++) {
      let noot = this.MidiNoten[k]
      console.log(noot)
      if (!(noot.charAt(1) === '#')) {
        div.appendChild(this.maakToets(noot, breedteWittetoets))
      } else {
        div.appendChild(this.maakToets(noot, breedteWittetoets, offset))
        noot.charAt(0) === 'd' || noot.charAt(0) === 'a' ? offset += breedteWittetoets * 2 : offset += breedteWittetoets
      }
    }
  }

  generateXylophone() {
    let divxylophone = document.getElementById('xylophone')
    const whitekeyWidth = parseFloat((100 / 7).toFixed(10))
    const rainbowcolours = ["red", "orange", "yellow", "green", "blue", "purple", "purple"]
    for (let k = 0; k < 7; k++) { //7 'witte' toetsen
      let pianokey = document.createElement('div')
      pianokey.classList.add('border', 'border-dark', 'rounded-bottom', 'd-inline-block', rainbowcolours[k], k === 6 ? 'accent-3' : null)
      pianokey.style.minWidth = whitekeyWidth + '%'
      pianokey.style.minHeight = "150px"
      divxylophone.appendChild(pianokey)
    }
  }

  maakToets(noot: string, breedteWittetoets: number, offset?: number) {
    let toets = document.createElement('div')
    toets.classList.add('border', 'border-dark')
    if (!(noot.charAt(1) === '#')) { //witte toets
      toets.classList.add('rounded-bottom', 'whitekey')
      toets.style.minWidth = breedteWittetoets + '%'
    } else { // zwarte toets
      noot === 'a#0' ? offset = 0 : offset = offset
      toets.classList.add('border-top-0', 'blackkey')
      toets.style.minWidth = (breedteWittetoets * 0.7) + '%'
      toets.style.marginLeft = offset + breedteWittetoets * 0.65 + '%'
    }
    toets.addEventListener('mousedown', (e: Event) => {
      this.synth.triggerAttack(noot)
      console.log(noot)
    })

    toets.addEventListener('mouseup', (e: Event) => {
      this.synth.triggerRelease()
      this.GespeeldeNoten.push(noot)
      console.log(this.GespeeldeNoten)
    })
    return toets
  }
}