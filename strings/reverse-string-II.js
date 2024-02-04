function reverseStr(s, k) {
    var _a;
    var arr = s.split('');
    for (var i = 0; i < arr.length; i += 2 * k) {
        var left = i;
        var right = Math.min(arr.length - 1, left + k - 1);
        while (left < right) {
            _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
            left++;
            right--;
        }
    }
    return arr.join('');
}
console.log(reverseStr('abcdefg', 2));
