function longestPalindrome(s: string) {
    if(s.length === 1) return s;
    let start = 0;
    let maxLength = 1;
    function expandAroundCenter(left: number, right: number) {
        while((left >= 0 && right <= s.length - 1) && (s[left] === s[right])) {
            if( (right - left + 1) > maxLength ) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for(let i = 1; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);
        expandAroundCenter(i, i - 1);
    }

    return s.slice(start, maxLength + start)
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))