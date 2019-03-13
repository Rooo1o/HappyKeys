import { Component, OnInit } from '@angular/core'
import { Noot } from '../noot.model';

@Component({
  selector: 'app-vexflowcontent',
  templateUrl: './vexflowcontent.component.html',
  styleUrls: ['./vexflowcontent.component.scss']
})
export class VexflowcontentComponent implements OnInit {
  public VF
  constructor() {

  }

  ngOnInit() {
    const canvas = document.getElementById('sheet')
    this.VF = Vex.Flow
    const renderer = new this.VF.Renderer(canvas, this.VF.Renderer.Backends.SVG)
    renderer.resize(900, 600)
    const context = renderer.getContext()
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')

    const trebleStave11 = new this.VF.Stave(20, 40, 250)
    trebleStave11.addClef('treble').addTimeSignature('4/4')
    const trebleStave12 = new this.VF.Stave(270, 40, 200)
    const trebleStave13 = new this.VF.Stave(470, 40, 200)
    const trebleStave14 = new this.VF.Stave(670, 40, 200)

    const bassStave11 = new this.VF.Stave(20, 110, 250)
    bassStave11.addClef('bass').addTimeSignature('4/4')
    const bassStave12 = new this.VF.Stave(270, 110, 200)
    const bassStave13 = new this.VF.Stave(470, 110, 200)
    const bassStave14 = new this.VF.Stave(670, 110, 200)

    const brace = new Vex.Flow.StaveConnector(trebleStave11, bassStave11).setType(3) // 3 = brace

    const trebleStave21 = new this.VF.Stave(20, 200, 250)
    trebleStave21.addClef('treble').addTimeSignature('4/4')
    const trebleStave22 = new this.VF.Stave(270, 200, 200)
    const trebleStave23 = new this.VF.Stave(470, 200, 200)
    const trebleStave24 = new this.VF.Stave(670, 200, 200)

    const bassStave21 = new this.VF.Stave(20, 270, 250)
    bassStave21.addClef('bass').addTimeSignature('4/4')
    const bassStave22 = new this.VF.Stave(270, 270, 200)
    const bassStave23 = new this.VF.Stave(470, 270, 200)
    const bassStave24 = new this.VF.Stave(670, 270, 200)

    const brace2 = new Vex.Flow.StaveConnector(trebleStave21, bassStave21).setType(3) // 3 = brace

    trebleStave11.setContext(context).draw()
    trebleStave12.setContext(context).draw()
    trebleStave13.setContext(context).draw()
    trebleStave14.setContext(context).draw()

    bassStave11.setContext(context).draw()
    bassStave12.setContext(context).draw()
    bassStave13.setContext(context).draw()
    bassStave14.setContext(context).draw()

    trebleStave21.setContext(context).draw()
    trebleStave22.setContext(context).draw()
    trebleStave23.setContext(context).draw()
    trebleStave24.setContext(context).draw()

    bassStave21.setContext(context).draw()
    bassStave22.setContext(context).draw()
    bassStave23.setContext(context).draw()
    bassStave24.setContext(context).draw()

    brace.setContext(context).draw()
    brace2.setContext(context).draw()

    const bar11 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['f#/4'], duration: 'q' }).addAccidental(0, new this.VF.Accidental("b")),
      new this.VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'q' })
    ]

    const bar12 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['f/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' })
    ]

    const bar13 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' })
    ]

    const bar14 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'h' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'h' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['b/4'], duration: 'qr' })
    ]

    const bar21 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['f/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'q' })
    ]

    const bar22 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['f/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' })
    ]

    const bar23 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['e/4'], duration: 'q' })
    ]

    const bar24 = [
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'h' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'h' })
    ]

    const voice11 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice11.addTickables(bar11)

    const voice12 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice12.addTickables(bar12)

    const voice13 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice13.addTickables(bar13)

    const voice14 = new this.VF.Voice({ num_beats: 6, beat_value: 4 })
    voice14.addTickables(bar14)

    const voice21 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice21.addTickables(bar21)

    const voice22 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice22.addTickables(bar22)

    const voice23 = new this.VF.Voice({ num_beats: 4, beat_value: 4 })
    voice23.addTickables(bar23)

    const voice24 = new this.VF.Voice({ num_beats: 5, beat_value: 4 })
    voice24.addTickables(bar24)

    const formatter = new this.VF.Formatter().joinVoices([voice11]).format([voice11], 200)
    voice11.draw(context, trebleStave11)

    const formatter2 = new this.VF.Formatter().joinVoices([voice12]).format([voice12], 200)
    voice12.draw(context, trebleStave12)

    const formatter3 = new this.VF.Formatter().joinVoices([voice13]).format([voice13], 200)
    voice13.draw(context, trebleStave13)

    const formatter4 = new this.VF.Formatter().joinVoices([voice14]).format([voice14], 200)
    voice14.draw(context, trebleStave14)

    const formatter5 = new this.VF.Formatter().joinVoices([voice21]).format([voice21], 200)
    voice21.draw(context, trebleStave21)

    const formatter6 = new this.VF.Formatter().joinVoices([voice22]).format([voice22], 200)
    voice22.draw(context, trebleStave22)

    const formatter7 = new this.VF.Formatter().joinVoices([voice23]).format([voice23], 200)
    voice23.draw(context, trebleStave23)

    const formatter8 = new this.VF.Formatter().joinVoices([voice24]).format([voice24], 200)
    voice24.draw(context, trebleStave24)

  }

  maakSheet(noten: Noot[], tijdssignatuur?: string, measuresPerStaff?: number) {
    const nootBegin = 0
    const nootEinde = 0

    if (!tijdssignatuur) {
      tijdssignatuur = '4/4'
    }
    if (!measuresPerStaff) {
      measuresPerStaff = 4
    }
    const canvas = document.getElementById('sheet')
    this.VF = Vex.Flow
    //assumptie dat er gebruik gemaakt wordt van 4/4 tijd, gebruiker zelf laten kiezen?
    const renderer = new this.VF.Renderer(canvas, this.VF.Rendere.Backends.SVG)
    renderer.resize(900, 600)
    const context = renderer.getContext()
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    // measures detecteren?
    //terwijl er nog noten zijn 
    do {

    } while (noten.length != 0)

  }

  maakStaff(measuresPerStaff: number, tijdssignatuur?: string) {
    for (let m = 0; m < measuresPerStaff; m++) {

    }
  }

  maakMeasure(tijdssignatuur?: string) {

  }

}
