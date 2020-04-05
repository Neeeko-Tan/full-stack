//es5
const calendar = {
    currentDay: 4,
    nextDay: function() {
        //var self = this
        setTimeout(function() {
            this.currentDay += 1;//self.currentDay += 1;
            console.log(this.currentDay);//console.log(self.currentDay);
        });
    }
};
calendar.nextDay();
//NaN

//es6
const calendar = {
    currentDay: 4,
    nextDay: function() {
        setTimeout(() => {
            this.currentDay += 1
            console.log(this.currentDay);
        });
    }
};
calendar.nextDay();




//this
const calendar = {
    currentDay: 4,
    normal: function () {
        console.log(this);
        setTimeout(function () {
            //谁调用this，this就指向哪里（目前setTimeOut）
            console.log(this)
        }.bind(this),1000);
    },
    arrow: function() {
        //1st
        console.log(this);
        setTimeout( () => {
            //2nd
            console.log(this);
        },1000);
    }
}

calendar.normal();
calendar.arrow();