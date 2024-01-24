//backtracking algorithm
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function subsets(arr) {
    var temp = [];
    var result = [];
    function recursive(arr, i) {
        if (i === arr.length) {
            return result.push(__spreadArray([], temp, true));
        }
        temp.push(arr[i]);
        recursive(arr, i + 1);
        temp.pop();
        recursive(arr, i + 1);
    }
    recursive(arr, 0);
    return result;
}
