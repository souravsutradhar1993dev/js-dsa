function reverseWords(str) {
    var arr = str.trim().split(' ');
    arr = arr.map(function (item) { return item.trim(); });
    arr = arr.filter(function (item) { return item !== ''; });
    var newArr = [];
    while (arr.length > 0) {
        var removedItem = arr.pop();
        newArr.push(removedItem);
    }
    return newArr.join(' ');
}
console.log(reverseWords("a good   example"));
