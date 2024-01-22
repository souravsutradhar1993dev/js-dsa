function removeDuplicates(arr) {
    var i = 0; // slow-runner pointer
    var j = 1; // fast-runner pointer
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        }
        j++;
    }
    return i + 1;
}
