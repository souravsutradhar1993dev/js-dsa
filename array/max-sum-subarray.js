function maxSubArray(arr) {
    var maxSum = arr[0];
    var currentSum = 0;
    for (var i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(currentSum, maxSum);
        if(currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
