function missingNumber(arr) {
    var actualSum = 0;
    var expectedSum = 0;
    for (var i = 1; i <= arr.length; i++) {
        expectedSum += i;
        actualSum += arr[i - 1];
    }
    return expectedSum - actualSum;
}
