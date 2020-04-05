//es5
function Course(name, price, units) {
    this.name = name;
    this.price = price;
    this.units = units;
}
Course.prototype.toString = function() {
    console.log(
        'name: ' + this.name + '\nprice: ' + this.price + 
        '\nunits: ' + this.units
    );
};
var course = new Course('fullstack', 3000, 4);
course.toString();

//es6
class Course {
    constructor(name, price, units) {
        this.name = name;
        this.price = price;
        this.units = units;
    }
    toString() {
        console.log(
            `name: ${this.name}\nprice: ${this.price}\n
            units: ${this.units}`
        );
    }
}
const course = new Course('fullstack', 3000, 4);
course.toString();