function removeDuplicates(arr: number[]): number {
    let i = 0; // slow-runner pointer
    let j = 1; // fast-runner pointer

    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        }
        j++;
    }
    return i+1;
}