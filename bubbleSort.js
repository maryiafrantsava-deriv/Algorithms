function bubbleSort(mas) {

    let isSorted = false;
    let temp;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < mas.length - 1; i++) {
            if (mas[i] > mas[i + 1]) {
                isSorted = false;
                temp = mas[i];
                mas[i] = mas[i + 1];
                mas[i + 1] = temp;
            }
        }
    }
    return mas;
}
console.log(bubbleSort([5, 1, 4, 2, 8]));
