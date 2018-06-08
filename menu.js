var menu = function(breakefast, lunch, dinner) {
          this.breakefast = breakefast,
          this.lunch = lunch,
          this.dinner = dinner
};

var mondayMenu = new menu('sandwich', 'tibse', 'pasta');
var tuesdayMenu = new menu('sandwich', 'mesert', 'otmeal');
var wednesdayMenu = new menu('sandwich', 'spageti', 'pasta');
var thursdayMenu = new menu('french toast', 'kikel', 'pasta');
var fridayMenu = new menu('sandwich', 'tibse', 'pasta');
var saturdayMenu = new menu('omlate', 'fish', 'mesere');
var sundayMenu = new menu('eggscamble', 'shiro', 'piza');

function eachDayMenu(){
  var date = new Date();
  var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

// console.log(n);
 if( n == "Monday") {
      console.log(mondayMenu);

    }
else if( n == "Tuesday") {

      console.log("today's breakefast is " + tuesdayMenu.breakefast);
    } else {
      console.log("try another date")
    }
};

eachDayMenu();
