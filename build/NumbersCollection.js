"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    // we could use direct length() instead of get but in that to get 
    // length we have to use collection.lenhth()
    // but with get we can use it as collection.length
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
