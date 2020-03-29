var obj ={
    name:'victor',
    printName: function () {
        console.log(this.name);
    }
};

obj.printName();


var o= {
    name: 'Jenny',
};

obj.printName.bind(o)();