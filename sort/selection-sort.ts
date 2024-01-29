function selectionSort(arr: number[]): number[] {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let minIndex = i;
        for(let j = i; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort([88, 3, 1, 99, 4, 50, 23]));