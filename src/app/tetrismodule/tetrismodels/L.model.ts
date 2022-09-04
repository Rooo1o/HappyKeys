import { Tetromino } from "./Tetromino.model";
export class L extends Tetromino {
    protected rotaties: Array<boolean[][]> = 
    [
        [
            [false, false, false],
            [true, true, true],
            [true, false, false]
        ],
        [
            [true, true, false],
            [false, true, false],
            [false, true, false]
        ],
        [
            [false, false, true],
            [true, true, true],
            [false, false, false]
        ],
        [
            [false, true, false],
            [false, true, false],
            [false, true, true]
        ]
    ];
    
    constructor(){
        super();
    }
}