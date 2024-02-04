function reverseStr(s: string, k: number) {
    let arr = s.split('');
    for(let i = 0; i < arr.length; i += 2*k) {
        let left = i;
        let right = Math.min(arr.length - 1, left + k - 1);

        while(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }
    }

    return arr.join('')
}

console.log(reverseStr('abcdefg', 2))