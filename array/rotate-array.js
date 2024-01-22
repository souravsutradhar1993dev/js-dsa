function rotate(arr, k) {
    k = k % arr.length;
    if (k > arr.length)
        return arr;
    reverse(0, arr.length - 1, arr);
    reverse(0, k - 1, arr);
    reverse(k, arr.length - 1, arr);
}
function reverse(startIndex, endIndex, arr) {
    while (endIndex > startIndex) {
        var temp = arr[endIndex];
        arr[endIndex--] = arr[startIndex];
        arr[startIndex++] = temp;
    }
    return arr;
}
