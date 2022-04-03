 const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let j = i - 1;//3
        const temp = arr[i];//2

        while (j>=0 && arr[j] > temp){//true
            arr[j+1] = arr[j];//2->3
            j--;
        }

        arr[j+1] = temp;
    }
    return arr;
 }
 console.log(insertionSort([3, 2, 7, 56, 2, 1]))
