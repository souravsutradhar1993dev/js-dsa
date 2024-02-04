function lengthOfLongestSubstring(str) {
    var start = 0;
    var end = 0;
    var maxStrSet = new Set();
    var maxLength = 0;
    while (end < str.length) {
        if (!maxStrSet.has(str[end])) {
            maxStrSet.add(str[end]);
            maxLength = Math.max(maxLength, maxStrSet.size);
            end++;
            console.log(end);
        }
        else {
            maxStrSet.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("pwwkew"));
