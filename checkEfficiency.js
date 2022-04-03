let arr = [];
while(arr.length < 1000){
    let r = Math.floor(Math.random() * 1000) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

const start = new Date().getTime();

//code

const end = new Date().getTime();
console.log(`Duration Time: ${end - start}ms`);
