function missingNumber(arr: number[]) {
    let actualSum = 0;
    let expectedSum = 0;
    for(let i = 1; i <= arr.length; i++) {
        expectedSum += i;
        actualSum += arr[i - 1];
    }

    return expectedSum - actualSum;
}
