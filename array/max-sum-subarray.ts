function maxSubArray(arr: number[]) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], arr[i] + currentSum);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}