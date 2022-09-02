import { Tetromino } from "../tetrominoes/Tetromino.model";

export class Spelbordmanipulator {
    static maakSpelbord(verticaal: Number, horizontaal: Number): boolean[][] {
        let spelbord: boolean[][];
        for(let i = 0; i < horizontaal; i++){
            for(let j = 0; j < verticaal; j++){
                spelbord[i][j] = false;
            }
        }
        return spelbord;
    }

    static draaiBlokje(spelbord: boolean[][], blokje: Tetromino): boolean[][] {
        return [];
    }

    static beweegBlokje(spelbord: boolean[][]): boolean[][] {
        return [];
    }
    
    static laatBlokjeVallen(spelbord: boolean[][]): boolean[][]{
        return [];
    }
}