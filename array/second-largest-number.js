function findSecondLargest(arr) {
    if (arr.length < 2) {
        return 'array must be of length 2';
    }
    var largest = Number.MIN_SAFE_INTEGER;
    var secondLargest = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
