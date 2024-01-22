function productExceptSelf(arr) {
    var postfixProductArray = new Array(arr.length).fill(1);
    var prefixProductArray = [];
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        postfixProductArray[i] = i === arr.length - 1 ? 1 : arr[i + 1] * postfixProductArray[i + 1];
    }
    for (var i = 0; i < arr.length; i++) {
        prefixProductArray.push(i === 0 ? 1 : arr[i - 1] * prefixProductArray[i - 1]);
    }
    for (var i = 0; i < arr.length; i++) {
        result.push(prefixProductArray[i] * postfixProductArray[i]);
    }
    return result;
}
