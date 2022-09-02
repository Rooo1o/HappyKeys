export abstract class Tetromino {
    protected rotaties: Array<boolean[][]>;
  //  protected huidigeRotatie: boolean[][];
    protected huidigeRotatieTeller: number = 0;

    protected roteerLinks(): Boolean[][]{
        if (this.huidigeRotatieTeller === 0) {
            this.huidigeRotatieTeller = this.rotaties.length;
        }
        this.huidigeRotatieTeller--;
        return this.rotaties[this.huidigeRotatieTeller];
    }

    private roteerRechts(): Boolean[][]{
        if(this.huidigeRotatieTeller === this.rotaties.length-1){
            this.huidigeRotatieTeller = -1;
        }
        this.huidigeRotatieTeller++;
        return this.rotaties[this.huidigeRotatieTeller];
    }
}