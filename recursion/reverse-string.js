function reverseString(arr) {
    if (arr.length === 0)
        return;
    var firstChar = arr.shift();
    reverseString(arr);
    arr.push(firstChar);
    return arr;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
