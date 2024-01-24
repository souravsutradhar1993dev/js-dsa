function isPalindrome(num: number|string) {
    let arr = num.toString().split('');
    if(arr.length < 2) {
        return true;
    }
    if(arr[0] !== arr[arr.length - 1]) {
        return false;
    }
    arr = arr.slice(1,-1);
    if(arr.length > 1) {
        return isPalindrome(arr.join(''));
    }else {
        return true;
    }
}