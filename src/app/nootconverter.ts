import { isNumeric } from 'rxjs/src/internal/util/isNumeric';
import { ValueTransformer } from '@angular/compiler/src/util';

export abstract class Nootconverter {
    //links de number MIDIwaarde, midden ToneJS, rechts Vexflow
    private static types = [
        [21, "a0", "a/0"], [22, "a#0", "a#/0"], [23, "b0", "b/0"],
        [24, "c1", "c/1"], [25, "c#1", "c#/1"], [26, "d1", "d/1"], [27, "d#1", "d#/1"], [28, "e1", "e/1"], [29, "f1", "f/1"], [30, "f#1", "f#/1"], [31, "g1", "g/1"], [32, "g#1", "g#/1"], [33, "a1", "a/1"], [34, "a#1", "a#/1"], [35, "b1", "b/1"],
        [36, "c2", "c/2"], [37, "c#2", "c#/2"], [38, "d2", "d/2"], [39, "d#2", "d#/2"], [40, "e2", "e/2"], [41, "f2", "f/2"], [42, "f#2", "f#/2"], [43, "g2", "g/2"], [44, "g#2", "g#/2"], [45, "a2", "a/2"], [46, "a#2", "a#/2"], [47, "b2", "b/2"],
        [48, "c3", "c/3"], [49, "c#3", "c#/3"], [50, "d3", "d/3"], [51, "d#3", "d#/3"], [52, "e3", "e/3"], [53, "f3", "f/3"], [54, "f#3", "f#/3"], [55, "g3", "g/3"], [56, "g#3", "g#/3"], [57, "a3", "a/3"], [58, "a#3", "a#/3"], [59, "b3", "b/3"],
        [60, "c4", "c/4"], [61, "c#4", "c#/4"], [62, "d4", "d/4"], [63, "d#4", "d#/4"], [64, "e4", "e/4"], [65, "f4", "f/4"], [66, "f#4", "f#/4"], [67, "g4", "g/4"], [68, "g#4", "g#/4"], [69, "a4", "a/4"], [70, "a#4", "a#/4"], [71, "b4", "b/4"],
        [72, "c5", "c/5"], [73, "c#5", "c#/5"], [74, "d5", "d/5"], [75, "d#5", "d#/5"], [76, "e5", "e/5"], [77, "f5", "f/5"], [78, "f#5", "f#/5"], [79, "g5", "g/5"], [80, "g#5", "g#/5"], [81, "a5", "a/5"], [82, "a#5", "a#/5"], [83, "b5", "b/5"],
        [84, "c6", "c/6"], [85, "c#6", "c#/6"], [86, "d6", "d/6"], [87, "d#6", "d#/6"], [88, "e6", "e/6"], [89, "f6", "f/6"], [90, "f#6", "f#/6"], [91, "g6", "g/6"], [92, "g#6", "g#/6"], [93, "a6", "a/6"], [94, "a#6", "a#/6"], [95, "b6", "b/6"],
        [96, "c7", "c/7"], [97, "c#7", "c#/7"], [98, "d7", "d/7"], [99, "d#7", "d#/7"], [100, "e7", "e/7"], [101, "f7", "f/7"], [102, "f#7", "f#/7"], [103, "g7", "g/7"], [104, "g#7", "g#/7"], [105, "a7", "a/7"], [106, "a#7", "a#/7"], [107, "b7", "b/7"],
        [108, "c8", "c/8"]
    ]

    public static get(noot): (string | number)[] {
        if (!isNaN(noot)) {
            return this.types[noot as number - 21]
        }
        if (!(noot as string).includes('/')) {
            for (let nootvanlijst of this.types) {
                if (noot as string === nootvanlijst[1]) {
                    return nootvanlijst
                }
            }
        }
        for (let nootvanlijst of this.types) {
            if (noot as string === nootvanlijst[2]) {
                return nootvanlijst
            }
        }
    }

}