function isPalindrome(item: number): boolean {
    if(item < 0) return false;
    return item.toString() === item.toString().split('').reverse().join('')
}

console.log(isPalindrome(123))
console.log(isPalindrome(121))