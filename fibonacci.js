"use strict";
// function getFibonacciItem(index: number): number {
//     const fiboArr = [0, 1];
//     if(index < 2) return fiboArr[index];
//     for(let i = 2; i <= index; i++) {
//         fiboArr.push(fiboArr[i - 1] + fiboArr[i - 2]);
//     }
//     return fiboArr[index];
// }
// using recursion
function getFibonacciItem(index) {
    if (index < 2)
        return index;
    return getFibonacciItem(index - 1) + getFibonacciItem(index - 2);
}
console.log(getFibonacciItem(2));
console.log(getFibonacciItem(3));
console.log(getFibonacciItem(5));
