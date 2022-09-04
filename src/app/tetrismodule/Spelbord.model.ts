import { Spelbordmanipulator } from "./Spelbordmanipulator";
import { Tetromino } from "./tetrismodels/Tetromino.model";

export class Spelbord {
    private _speelveld: boolean[][];
    private _score: Number;
    private _level: Number;
    private _lijnen: Number;
    private zakje: Array<Tetromino> = Tetromino[7];
    private _volgendBlok: Tetromino;

    // save functie?
    constructor(speelveld?: boolean[][], score?: Number, level?: Number, lijnen?: Number, verticaal?: Number, horizontaal?: Number){
        if(speelveld){
            this.setSpeelveld(speelveld)
        } else {
            if(verticaal && horizontaal){
                this.genereerSpeelveld(verticaal, horizontaal);
            } else {
                this.genereerSpeelveld(18, 10);
            }
        }
        if (score) {
            this.setScore(score);
        }
        if(level){
            this.setLevel(level);
        }
        if(lijnen){
            this.setLijnen(lijnen);
        }
    }

    setSpeelveld(speelveld: boolean[][]){
        this._speelveld = speelveld;
    }

    genereerSpeelveld(verticaal: Number, horizontaal: Number){
        Spelbordmanipulator.maakSpelbord(verticaal, horizontaal);
    }

    getSpeelveld(){
        return this._speelveld
    }

    setScore(score: Number){
        this._score = score;
    }

    getScore(): Number{
        return this._score
    }

    setLevel(level: Number){
        this._level = level;
    }

    getLevel(): Number{
        return this._level
    }

    setLijnen(lijnen: Number){
        this._lijnen = lijnen;
    }

    getLijnen(): Number{
        return this._lijnen;
    }

    genereerVolgendBlok(){

    }

    volgendeActie() {

    }

    decrementLocatieBlokjeOpSpelbord(){

    }

    nieuwBlokje() {

    }
}