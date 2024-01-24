function reverseString(arr: string[]) {
    let left = 0;
    let right = arr.length - 1;

    while(right > left) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }

    return arr;
}

console.log(reverseString(["h","e","l","l","o"]));