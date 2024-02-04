function groupAnagrams(strs: string[]): string[][] {
    if(strs.length === 1) return [strs];
    let alphaArr: string[] = [];
    for (let i = 97; i < 123; i++) {
        alphaArr.push(String.fromCharCode(i));
    }

    let freqMap = new Map();

    for(let i = 0; i < strs.length; i++) {
        let arr = strs[i].split('');
        let map = new Map();
        for(let x = 0; x < arr.length; x++) {
            if(map.has(arr[x])) {
                map.set(arr[x], map.get(arr[x]) + 1);
            }else {
                map.set(arr[x], 1);
            }
        }
        let freqStr = '';
        for(let j = 0; j < alphaArr.length; j++) {
            if(map.has(alphaArr[j])) {
                freqStr += `${alphaArr[j] + map.get(alphaArr[j])}`
            }   
        }
        
        if(freqMap.has(freqStr)) {
            let freqMapEl = freqMap.get(freqStr);
            freqMapEl.push(strs[i])
            freqMap.set(freqStr, freqMapEl);
        }else {
            freqMap.set(freqStr, [strs[i]]);
        }
    }

    return Array.from(freqMap.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));