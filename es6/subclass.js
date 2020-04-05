import 'class.js';

//es5
function JRCourse(name, price, units, instructor) {
    Course.call(this, name, price, units);
    this.instructor = instructor;
}
JRCourse.prototype = Object.create(Course.prototype);
JRCourse.prototype.constructor = JRCourse;
var jrCourse = new JRCourse('fullstack', 3000, 4, 'Jenny');

//es6
class JRCourse extends Course {
    constructor(name, price, units, instructor) {
        super(name, price, units);
        this.instructor = instructor;
    }
}
const jrCourse = new JRCourse('fullstack', 3000, 4, 'Jenny');