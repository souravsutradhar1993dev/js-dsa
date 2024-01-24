function reverseString(arr: string[]) {
    if(arr.length === 0) return;

    const firstChar = arr.shift();
    reverseString(arr);
    arr.push(firstChar);
    return arr;
}

console.log(reverseString(["h","e","l","l","o"]))