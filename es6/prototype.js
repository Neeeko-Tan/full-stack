// const person = {
//     name: 'Jenny',
//     sleep: function() {
//         console.log(`${this.name} is sleeping`)
//     }
// }
var methods = {
    sleep: function() {
        console.log(`${this.name} is sleeping`)
    },
    code: function() {
        console.log(`${this.name} is coding`)
    }
}

function Person(name) {
    // var person = {};
    // person.name = name;
    // person.sleep = methods.sleep;
    // person.code = methods.code;
    var person = Object.create(Person.prototype);//new
    person.name = name;
    return person;//new
}

Person.prototype.sleep = function() {
    console.log(`${this.name} is sleeping`);
}

const Jenny = Person('Jenny');//new Person('Jenny')
Jenny.code();
// const Victor = Person('Victor');
