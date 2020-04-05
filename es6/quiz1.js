let array = [0, 1, 2, 3];
array.forEach(e => {
    e = e * 2;
});
console.log(array);

let arr = [0, 1, 2, 3];
const res = arr.map(i => {
    if ( i % 2 ) {
        return i;
    }
});
console.log(res);