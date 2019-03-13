import { Noot } from './noot.model'
export class Sheet {
    constructor(
        private _naam: string,
        private _noten = new Array<Noot>()
    ) { }
}

enum Type {
    Xyolofoon,
    Keyboard,
    Piano
}