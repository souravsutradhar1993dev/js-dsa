function reverseString(arr) {
    var _a;
    var left = 0;
    var right = arr.length - 1;
    while (right > left) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
