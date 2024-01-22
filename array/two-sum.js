function twoSum(arr, sum) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (map.has(sum - arr[i])) {
            return [map.get(sum - arr[i]), i];
        }
        else {
            map.set(arr[i], i);
        }
    }
    return [];
}
