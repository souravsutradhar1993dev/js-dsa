const maxArea = function(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;

    let maxArea = Number.MIN_SAFE_INTEGER;

    while(right > left) {
        let area = Math.min(arr[left], arr[right]) * (right - left);
        maxArea = Math.max(maxArea, area); 
        if(arr[left] < arr[right]) {
            left++;
        }else {
            right--;
        }
    }
    return maxArea;
}