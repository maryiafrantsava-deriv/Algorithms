 const factorial = (n) => {
     //calling factorial() if n is non-negative
    if(n <= 0){
        return 'Factorial is a function defined on the set of ' +
                'non-negative values of numbers.';
    }
    if (n === 1){
        return n;
    }
    return n * factorial(n-1);
 }
console.log(factorial(3));
