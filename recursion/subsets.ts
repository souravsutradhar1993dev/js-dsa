//backtracking algorithm

function subsets(arr: []) {
    let temp = [];
    let result = [];
    function recursive(arr: [], i: number) {
        if(i === arr.length) {
            return result.push([...temp])
        }
        temp.push(arr[i]);
        recursive(arr, i + 1);
        temp.pop();
        recursive(arr, i + 1);
    }
    recursive(arr, 0);
    return result;
}