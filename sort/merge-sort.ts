function mergeSort(arr: number[]): number[] {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let sortedArray: number[] = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArray.push(left.shift());
        }else {
            sortedArray.push(right.shift());
        }
    }

    console.log(sortedArray, left, right)
    return [...sortedArray, ...left, ...right];
}

console.log(mergeSort([88, 3, 1, 99, 4, 50, 23]));