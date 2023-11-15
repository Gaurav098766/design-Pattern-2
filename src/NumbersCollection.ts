import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    
    constructor(public data: number[]){
        super()
    }

    compare(leftIndex: number , rightIndex: number): boolean{
        return this.data[leftIndex] > this.data[rightIndex]
    }


    swap(leftIndex: number , rightIndex: number):void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }

    // we could use direct length() instead of get but in that to get 
    // length we have to use collection.lenhth()
    // but with get we can use it as collection.length
    get length():number{
        return this.data.length;
    }
}