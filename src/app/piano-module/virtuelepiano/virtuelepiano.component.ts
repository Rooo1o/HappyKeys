import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import * as Tone from 'tone'
import { Noot } from '../pianomodels/noot.model';
declare var SampleLibrary: any;

@Component({
  selector: 'app-virtuelepiano',
  templateUrl: './virtuelepiano.component.html',
  styleUrls: ['./virtuelepiano.component.scss',],
  encapsulation: ViewEncapsulation.None
})

export class VirtuelepianoComponent implements OnInit {
  public synth
  public noten
  public gespeeldeNoten
  public samples
  public instruments

  constructor() {
    this.synth = SampleLibrary.load({
      instruments: "piano", 
      ext: ".mp3"
    }).toMaster()

    this.noten = new Array<Noot>()
    for(let midiwaarde = 21; midiwaarde < 108; midiwaarde++){
      this.noten.push(new Noot(midiwaarde))
    }
    this.gespeeldeNoten = new Array<string>()
  }

  ngOnInit() {
  //  this.generateKeyboard()
    this.generatePiano()
  //  this.generateXylophone()
  }

  // NO TOUCHING
  generatePiano() {
    let div = document.getElementById('piano')
    let breedteWittetoets = (100 / 52)
    let offset = breedteWittetoets

    for (let t = 21; t <= 108; t++) {
      let noot = new Noot(t)
      if (!(noot.getTonewaarde().includes('#'))) {
        div.appendChild(this.maakToets(noot.getTonewaarde(), breedteWittetoets))
      } else {
        div.appendChild(this.maakToets(noot.getTonewaarde(), breedteWittetoets, offset))
        noot.getTonewaarde() != 'a#0' && (noot.getTonewaarde().charAt(0) === 'd' || noot.getTonewaarde().charAt(0) === 'a') ? offset += breedteWittetoets * 2 : offset += breedteWittetoets
      }
    }
  }

  // DO NOT TOUCH
  generateKeyboard() {
    let div = document.getElementById('keyboard')
    let breedteWittetoets = parseFloat((100 / 35).toFixed(10))
    let offset = 0
    for (let k = 36; k <= 95; k++) {
      let noot = new Noot(k)
      if (!(noot.getTonewaarde().includes('#'))) {
        div.appendChild(this.maakToets(noot.getTonewaarde(), breedteWittetoets))
      } else {
        div.appendChild(this.maakToets(noot.getTonewaarde(), breedteWittetoets, offset))
        noot.getTonewaarde().charAt(0) === 'd' || noot.getTonewaarde().charAt(0) === 'a' ? offset += breedteWittetoets * 2 : offset += breedteWittetoets
      }
    }
  }

  // deprecated
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

  // NEVER EVER TOUCH
  maakToets2(noot: string, breedteWittetoets: number, offset?: number) {
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
    })

    toets.addEventListener('mouseup', (e: Event) => {
      this.synth.triggerRelease()
      this.gespeeldeNoten.push(noot)
    })
    return toets
  }

   // NEVER EVER TOUCH
   maakToets(noot: string, breedteWittetoets: number, offset?: number) {
    let toets = document.createElement('div')
    if (!(noot.charAt(1) === '#')) { //witte toets
      toets = this.maakWitteToets(noot, breedteWittetoets, offset)
    } else { // zwarte toets
      noot === 'a#0' ? offset = 0 : offset = offset
      toets.classList.add('border-top-0', 'blackkey', 'border-dark')
      toets.style.minWidth = (breedteWittetoets * 0.7) + '%'
      toets.style.marginLeft = offset + breedteWittetoets * 0.65 + '%'
    }

    this.geefToetsZijnToon(toets, noot)
    return toets
  }

  maakWitteToets(noot: string, breedteWitteToets: number, offset?: number){
    let toets = document.createElement('div')
    toets.classList.add('border-dark', 'rounded-bottom', 'whitekey')
    toets.style.minWidth = breedteWitteToets + '%'
    return toets
  }

  maakZwarteToets(noot: string, breedteWitteToets: number, offset?: number){

  }

  geefToetsZijnToon(toets, noot){
    toets.addEventListener('mousedown', (e: Event) => {
      this.synth.triggerAttack(noot)
    })
    toets.addEventListener('mouseup', (e: Event) => {
      this.synth.triggerRelease()
      this.gespeeldeNoten.push(noot)
    })
  }
}