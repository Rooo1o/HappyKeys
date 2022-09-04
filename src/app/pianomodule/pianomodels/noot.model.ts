import { Nootconverter } from './nootconverter';

export class Noot {
    private noten
    private lengte: number
    private sleutel: Sleutel
    private gecorrigeerdeLengte: number
    private midiwaarde
    private tonewaarde
    constructor(
        private _noot: any,
    ) {
        let noten = Nootconverter.get(_noot);
        this.midiwaarde = noten[0]
        this.tonewaarde = noten[1]
        return this /* factory method */
    }
    setLengte(lengte: number) {
        this.lengte = lengte
        return this /* factory method */
    }

    getLengte(): number {
        return this.lengte
    }

    setSleutel(sleutel: Sleutel) {
        this.sleutel = sleutel
        return this /* factory method */
    }

    getSleutel(): Sleutel{
        return this.sleutel
    }

    getMidiwaarde(): number {
        return this.midiwaarde
    }

    getTonewaarde(): string {
        return this.tonewaarde
    }
}

export enum Sleutel {
    Viool,
    Bass
}