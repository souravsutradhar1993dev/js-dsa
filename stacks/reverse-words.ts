function reverseWords(str: string) {
    let arr = str.trim().split(' ');
    arr = arr.map(item => item.trim());
    arr = arr.filter(item=> item !== '');
    let newArr = [];
    while(arr.length > 0) {
        let removedItem = arr.pop();
        newArr.push(removedItem);
    }
    return newArr.join(' ');
}

console.log(reverseWords("a good   example"))