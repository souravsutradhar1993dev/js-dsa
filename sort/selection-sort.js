function selectionSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var minIndex = i;
        for (var j = i; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
        }
    }
    return arr;
}
console.log(selectionSort([88, 3, 1, 99, 4, 50, 23]));
