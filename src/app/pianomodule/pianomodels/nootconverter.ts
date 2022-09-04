export abstract class Nootconverter {
    //links de number MIDIwaarde, rechts ToneJS
    private static noottupels = [
        [21, "a0"], [22, "a#0"], [23, "b0"],
        [24, "c1"], [25, "c#1"], [26, "d1"], [27, "d#1"], [28, "e1"], [29, "f1"], [30, "f#1"], [31, "g1"], [32, "g#1"], [33, "a1"], [34, "a#1"], [35, "b1"],
        [36, "c2"], [37, "c#2"], [38, "d2"], [39, "d#2"], [40, "e2"], [41, "f2"], [42, "f#2"], [43, "g2"], [44, "g#2"], [45, "a2"], [46, "a#2"], [47, "b2"],
        [48, "c3"], [49, "c#3"], [50, "d3"], [51, "d#3"], [52, "e3"], [53, "f3"], [54, "f#3"], [55, "g3"], [56, "g#3"], [57, "a3"], [58, "a#3"], [59, "b3"],
        [60, "c4"], [61, "c#4"], [62, "d4"], [63, "d#4"], [64, "e4"], [65, "f4"], [66, "f#4"], [67, "g4"], [68, "g#4"], [69, "a4"], [70, "a#4"], [71, "b4"],
        [72, "c5"], [73, "c#5"], [74, "d5"], [75, "d#5"], [76, "e5"], [77, "f5"], [78, "f#5"], [79, "g5"], [80, "g#5"], [81, "a5"], [82, "a#5"], [83, "b5"],
        [84, "c6"], [85, "c#6"], [86, "d6"], [87, "d#6"], [88, "e6"], [89, "f6"], [90, "f#6"], [91, "g6"], [92, "g#6"], [93, "a6"], [94, "a#6"], [95, "b6"],
        [96, "c7"], [97, "c#7"], [98, "d7"], [99, "d#7"], [100, "e7"], [101, "f7"], [102, "f#7"], [103, "g7"], [104, "g#7"], [105, "a7"], [106, "a#7"], [107, "b7"],
        [108, "c8"]
    ]


    public static get(noot): (string | number)[] {
        if (!isNaN(noot)) {
            return this.noottupels[noot as number - 21]
        }
        return this.noottupels[this.convertStringnootToNummer(noot)];
    }

    private static convertStringnootToNummer(noot: unknown): number{
        let num = -11;
        if ((noot as string).length === 3) {
            num += 1;
        }
        num += this.convertNootToNumber(Array.from(noot as string)[0]);
        let numb = (noot as string).slice(-1);
        num += ((numb as unknown as number) * 12);
        return num;
    }

    private static convertNootToNumber(noot: String): number {
        switch (noot) {
            case 'c':
                return 1;
            case 'd': 
                return 3;
            case 'e':
                return 5;
            case 'f':
                return 6;
            case 'g': 
                return 8;
            case 'a': 
                return 10;
            case 'b':
                return 12;
            default: throw new Error("Er is iets misgegaan. Illegale noot doorgegeven.");
        }
    }
/*
    // oude functie
    public static getBackup(noot): (string | number)[] {
        if (!isNaN(noot)) {
            return this.noottupels[noot as number - 21]
        }
        if (!(noot as string).includes('/')) {
            for (let nootvanlijst of this.noottupels) {
                if (noot as string === nootvanlijst[1]) {
                    return nootvanlijst
                }
            }
        }
        for (let nootvanlijst of this.noottupels) {
            if (noot as string === nootvanlijst[2]) {
                return nootvanlijst
            }
        }
    }
    
*/
}