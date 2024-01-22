function maxProfit(arr) {
    if (arr.length < 2)
        return 0;
    var min = arr[0];
    var maxProfit = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        else {
            maxProfit = Math.max(arr[i] - min, maxProfit);
        }
    }
    return maxProfit;
}
