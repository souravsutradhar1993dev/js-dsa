function lengthOfLongestSubstring(str: string) {
    let start = 0;
    let end = 0;
    let maxStrSet = new Set();
    let maxLength = 0;
    while(end < str.length) {
        if(!maxStrSet.has(str[end])) {
            maxStrSet.add(str[end])
            maxLength = Math.max(maxLength, maxStrSet.size)
            end++;
            console.log(end)
        } else {
            maxStrSet.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));