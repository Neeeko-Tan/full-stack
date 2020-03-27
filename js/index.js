function foo() {
    return 1;
}

function bar() {
    var a = foo();
    console.log(a);
}

bar();