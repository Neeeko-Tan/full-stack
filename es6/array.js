//push, pop, unshift, shift

const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    break;
}

arr.forEach(function(i, index){ 
    console.log(i, index);
});

const res = arr.filter(function(i){
    return i === 2;
});
console.log(res);

const res2 = arr.map(function(i){
    return 1
});
console.log(res2);