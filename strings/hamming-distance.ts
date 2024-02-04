function hammingDistance(x: number, y: number) {
    let binX = x.toString(2);
    let binY = y.toString(2);

    if(binX.length < binY.length) {
        while(binX.length !== binY.length) {
            binX = '0' + binX;
        }
    }else if(binX.length > binY.length){
        while(binX.length !== binY.length) {
            binY = '0' + binY;
        }
    }  
    
    let distance = 0;

    for(let i = 0; i < binX.length; i++) {
        if(binX[i] !== binY[i]) {
            distance++;
        }
    }

    return distance;
}