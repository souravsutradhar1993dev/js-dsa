function insertionSort(arr: number[]): number[] {
    let n = arr.length;
    for(let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && key < arr[j]) {
            arr[j+1] = arr[j]
            j--;
        }  
        arr[j+1] = key; 
    }

    return arr;
}

console.log(insertionSort([88, 3, 1, 99, 4, 50, 23]));