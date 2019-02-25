import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vexflowcontent',
  templateUrl: './vexflowcontent.component.html',
  styleUrls: ['./vexflowcontent.component.scss']
})
export class VexflowcontentComponent implements OnInit {
public VF;
  constructor() {

   }

  ngOnInit() {
    var div = document.getElementById("sheet")
        this.VF = Vex.Flow;
        var renderer = new this.VF.Renderer(div,this.VF.Renderer.Backends.SVG);
        renderer.resize(1100, 600);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var trebleStave11 = new this.VF.Stave(20, 40, 250);
        trebleStave11.addClef("treble").addTimeSignature("4/4");
        var trebleStave12 = new this.VF.Stave(270, 40, 250);
        var trebleStave13 = new this.VF.Stave(520, 40, 250);
        var trebleStave14 = new this.VF.Stave(770, 40, 250);
        
        var bassStave11 = new this.VF.Stave(20, 110, 250);
        bassStave11.addClef("bass").addTimeSignature("4/4");
        var bassStave12 = new this.VF.Stave(270, 110, 250);
        var bassStave13 = new this.VF.Stave(520, 110, 250);
        var bassStave14 = new this.VF.Stave(770, 110, 250);

        var brace = new Vex.Flow.StaveConnector(trebleStave11, bassStave11).setType(3); // 3 = brace

        var trebleStave21 = new this.VF.Stave(20, 200, 250);
        trebleStave21.addClef("treble").addTimeSignature("4/4");
        var trebleStave22 = new this.VF.Stave(270, 200, 250);
        var trebleStave23 = new this.VF.Stave(520, 200, 250);
        var trebleStave24 = new this.VF.Stave(770, 200, 250);

        var bassStave21 = new this.VF.Stave(20, 270, 250);
        bassStave21.addClef("bass").addTimeSignature("4/4");
        var bassStave22 = new this.VF.Stave(270, 270, 250);
        var bassStave23 = new this.VF.Stave(520, 270, 250);
        var bassStave24 = new this.VF.Stave(770, 270, 250);

        var brace2 = new Vex.Flow.StaveConnector(trebleStave21, bassStave21).setType(3); // 3 = brace

        trebleStave11.setContext(context).draw();
        trebleStave12.setContext(context).draw();
        trebleStave13.setContext(context).draw();
        trebleStave14.setContext(context).draw();

        bassStave11.setContext(context).draw();
        bassStave12.setContext(context).draw();
        bassStave13.setContext(context).draw();
        bassStave14.setContext(context).draw();
        
        trebleStave21.setContext(context).draw();
        trebleStave22.setContext(context).draw();
        trebleStave23.setContext(context).draw();
        trebleStave24.setContext(context).draw();

        bassStave21.setContext(context).draw();
        bassStave22.setContext(context).draw();
        bassStave23.setContext(context).draw();
        bassStave24.setContext(context).draw();

        brace.setContext(context).draw();
        brace2.setContext(context).draw();

        var bar11 = [
           new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
           new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
           new this.VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
           new this.VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" })
        ];

        var bar12 = [
          new this.VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" })
        ];

        var bar13 = [
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" })
        ];

        var bar14 = [
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "h" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "h" }),  
          new this.VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" })
        ];

        var bar21 = [
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" })
        ];

        var bar22 = [
          new this.VF.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" })
        ];

        var bar23 = [
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" })
        ];

        var bar24 = [
          new this.VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "h" }),
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new this.VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "h" })
        ]

        var voice11 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice11.addTickables(bar11);

        var voice12 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice12.addTickables(bar12);

        var voice13 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice13.addTickables(bar13);

        var voice14 = new this.VF.Voice({num_beats: 6, beat_value: 4});
        voice14.addTickables(bar14);

        var voice21 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice21.addTickables(bar21);

        var voice22 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice22.addTickables(bar22);

        var voice23 = new this.VF.Voice({num_beats: 4, beat_value: 4});
        voice23.addTickables(bar23);

        var voice24 = new this.VF.Voice({num_beats: 5, beat_value: 4});
        voice24.addTickables(bar24);
        
        var formatter = new this.VF.Formatter().joinVoices([voice11]).format([voice11], 200);
        voice11.draw(context, trebleStave11);

        var formatter2 = new this.VF.Formatter().joinVoices([voice12]).format([voice12], 200);
        voice12.draw(context, trebleStave12);

        var formatter3 = new this.VF.Formatter().joinVoices([voice13]).format([voice13], 200);
        voice13.draw(context, trebleStave13);

        var formatter4 = new this.VF.Formatter().joinVoices([voice14]).format([voice14], 200);
        voice14.draw(context, trebleStave14);

        var formatter5 = new this.VF.Formatter().joinVoices([voice21]).format([voice21], 200);
        voice21.draw(context, trebleStave21);

        var formatter6 = new this.VF.Formatter().joinVoices([voice22]).format([voice22], 200);
        voice22.draw(context, trebleStave22);

        var formatter7 = new this.VF.Formatter().joinVoices([voice23]).format([voice23], 200);
        voice23.draw(context, trebleStave23);

        var formatter8 = new this.VF.Formatter().joinVoices([voice24]).format([voice24], 200);
        voice24.draw(context, trebleStave24);

  }

}
