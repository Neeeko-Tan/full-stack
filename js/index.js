var result = [];
//x % 4 == 0 ? (x % 5 == 0? 0 : 1 ) : 0 ;
for (var i = 0; i < 100; i++){
    if (!(i%4) && (i%5)){
        result.push(i);
        if (result.length === 10){
            break;
        }
    }
}

console.log(result);