"use strict";
function isAnagram(str1, str2) {
    if (str1.length !== str1.length)
        return false;
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = obj1[str1[i]] ? ++obj1[str1[i]] : 1;
        obj2[str2[i]] = obj2[str2[i]] ? ++obj2[str2[i]] : 1;
    }
    for (const item of Object.keys(obj1)) {
        if (obj1[item] !== obj2[item])
            return false;
    }
    return true;
}
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('anagram', 'nagarm'));
