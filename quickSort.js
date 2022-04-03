const quickSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);

    const left = arr.filter( val => val < arr[mid]);
    const right = arr.filter( val => val > arr[mid]);
    console.log(left, right, arr[mid]);
    return [...quickSort(left), arr[mid], ...quickSort(right)];
}
console.log(quickSort([4,3,2,4,5,677,1]));
