import { Tetromino } from "./Tetromino.model";
export class I extends Tetromino {
    protected rotaties: Array<boolean[][]> = 
    [
        [
            [false, false, false, false], 
            [false, false, false, false], 
            [true, true, true, true], 
            [false, false, false, false]
        ],
        [
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false],
        ]
    ];

    constructor(){
        super();
    }
}