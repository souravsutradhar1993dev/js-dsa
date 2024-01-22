function rotate(arr: [], k: number) {
    k = k % arr.length;
    if(k > arr.length) return arr;
    reverse(0, arr.length - 1, arr);
    reverse(0, k - 1, arr);
    reverse(k, arr.length - 1, arr);
}

function reverse(startIndex: number, endIndex: number, arr: []) {
    while(endIndex > startIndex) {
        let temp = arr[endIndex];
        arr[endIndex--] = arr[startIndex];
        arr[startIndex++] = temp;
    }
    return arr;
}