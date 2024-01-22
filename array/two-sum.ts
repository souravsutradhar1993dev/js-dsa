function twoSum(arr: number[], sum: number): (number|void)[] {
    const map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(map.has(sum - arr[i])) {
            return [map.get(sum - arr[i]), i];
        }else {
            map.set(arr[i], i);
        }
    }
    return [];
}