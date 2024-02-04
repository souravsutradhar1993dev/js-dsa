function groupAnagrams(strs) {
    if (strs.length === 1)
        return [strs];
    var alphaArr = [];
    for (var i = 97; i < 123; i++) {
        alphaArr.push(String.fromCharCode(i));
    }
    var freqMap = new Map();
    for (var i = 0; i < strs.length; i++) {
        var arr = strs[i].split('');
        var map = new Map();
        for (var x = 0; x < arr.length; x++) {
            if (map.has(arr[x])) {
                map.set(arr[x], map.get(arr[x]) + 1);
            }
            else {
                map.set(arr[x], 1);
            }
        }
        var freqStr = '';
        for (var j = 0; j < alphaArr.length; j++) {
            if (map.has(alphaArr[j])) {
                freqStr += "".concat(alphaArr[j] + map.get(alphaArr[j]));
            }
        }
        if (freqMap.has(freqStr)) {
            var freqMapEl = freqMap.get(freqStr);
            freqMapEl.push(strs[i]);
            freqMap.set(freqStr, freqMapEl);
        }
        else {
            freqMap.set(freqStr, [strs[i]]);
        }
    }
    return Array.from(freqMap.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
