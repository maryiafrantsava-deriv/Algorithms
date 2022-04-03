const merging = (left, right) => {
    const result = [];

    while(left.length && right.length){
        if(left[0] < right[0]) {
            //shift cut the first element of array with mutation
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    while(left.length){
        result.push(left.shift());
    }

    while(right.length){
        result.push(right.shift());
    }

    return result;
}

const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merging(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([4,3,2,4,5,667,1]));
