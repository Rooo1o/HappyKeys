import { Tetromino } from "./Tetromino.model";
export class J extends Tetromino {
    protected rotaties: Array<boolean[][]> = 
    [
        [
            [false, false, false],
            [true, true, true],
            [false, false, true],
        ],
        [
            [false, true, false],
            [false, true, false],
            [true, true, false]
        ],
        [
            [true, false, false],
            [true, true, true],
            [false, false, false]
        ],
        [
            [false, true, true],
            [false, true, false],
            [false, true, false]
        ]
    ];
    
    constructor(){
        super();
    }
}