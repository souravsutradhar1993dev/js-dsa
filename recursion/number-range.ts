function rangeOfNumbers(start: number, end: number) {
    if(end < start) {
        return [];
    }else {
        const numbers: any = rangeOfNumbers(start, end - 1);
        numbers.push(end);
        return numbers;
    }
}
console.log(rangeOfNumbers(1, 6));