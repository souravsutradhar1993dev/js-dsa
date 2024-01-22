function maxProfit(arr: number[]) {
    if(arr.length < 2) return 0;
    let min = arr[0];
    let maxProfit = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }else {
            maxProfit = Math.max(arr[i] - min, maxProfit);
        }
    }

    return maxProfit;
}