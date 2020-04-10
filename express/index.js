// function callback() {
//     console.log(new Date())
// }

// function foo(cb) {
//     setTimeout(() => {
//         cb();
//     },1000);
// }

// console.log(new Date());
// foo(callback);

const obj = {
    callback:function() {
        console.log(new Date());
    }
}

function foo(cb) {
    setTimeout(() => {
        cb();
    },1000);
}

console.log(new Date());
foo(obj.callback);