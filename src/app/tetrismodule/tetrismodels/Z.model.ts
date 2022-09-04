import { Tetromino } from "./Tetromino.model";
export class Z extends Tetromino {
    protected rotaties: Array<boolean[][]> = 
    [
        [
            [false, false, false],
            [true, true, false],
            [false, true, true],
        ],
        [
            [false, true, false],
            [true, true, false],
            [true, false, false]
        ],
        [
            [false, false, false],
            [true, true, false],
            [false, true, true]
        ],
        [
            [false, true, false],
            [true, true, false],
            [true, false, false]
        ]
    ];
    
    constructor(){
        super();
    }
}