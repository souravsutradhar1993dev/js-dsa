function rangeOfNumbers(start, end) {
    if (end < start) {
        return [];
    }
    else {
        var numbers = rangeOfNumbers(start, end - 1);
        numbers.push(end);
        return numbers;
    }
}
console.log(rangeOfNumbers(1, 6));
