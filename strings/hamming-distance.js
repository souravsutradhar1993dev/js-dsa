function hammingDistance(x, y) {
    var binX = x.toString(2);
    var binY = y.toString(2);
    if (binX.length < binY.length) {
        while (binX.length !== binY.length) {
            binX = '0' + binX;
        }
    }
    else if (binX.length > binY.length) {
        while (binX.length !== binY.length) {
            binY = '0' + binY;
        }
    }
    var distance = 0;
    for (var i = 0; i < binX.length; i++) {
        if (binX[i] !== binY[i]) {
            distance++;
        }
    }
    return distance;
}
