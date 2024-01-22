var maxArea = function (arr) {
    var left = 0;
    var right = arr.length - 1;
    var maxArea = Number.MIN_SAFE_INTEGER;
    while (right > left) {
        var area = Math.min(arr[left], arr[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (arr[left] < arr[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
};
