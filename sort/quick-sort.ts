function quickSort(arr: number[]) {
    if(arr.length <= 1) return arr;

    let pivot: number = arr[0];
    let left: number[] = [];
    let right: number[] = [];

    for(let i = 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([88, 3, 1, 99, 4, 50, 23]));