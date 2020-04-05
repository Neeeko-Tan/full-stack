const name = "Jenny";
const foo = function() {
    const greeting = "Hello";
    const bar = function() {
        console.log(`${greeting} ${name}`);
    };
    return bar;
};

const bar = foo();
bar();