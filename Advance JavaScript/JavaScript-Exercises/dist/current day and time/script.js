const block = document.getElementById("block");
function doDate() {
    // get the current date and time 
    var today = new Date();

    // get the day of the week (0-6, where 0 is sunday and 6 is saturday)
    var day = today.getDay();

    // Array of day names
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    // Display the current day
    // block.innerHTML = "Today is: " + daylist[day] + ".";

    // get the current hour, minute and second 
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();


    // determine if it's AM or PM
    var prepand = (hour >= 12) ? "PM" : "AM";

    // convert 24-hour format to 12-hour format
    hour = (hour >= 12) ? hour - 12 : hour;

    // check for special cases when hour is 0
    if (hour === 0 && prepand === "PM") {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = "Noon"
        } else {
            hour = 12;
            prepand = "PM"
        }
    }

    // check for special cases when hour is 0 
    if (hour === 0 && prepand === "AM") {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = "Midnight;"
        } else {
            hour = 12;
            prepand = "AM"
        }
    }

    // display the current time 


    block.innerHTML = "Today is: " + daylist[day] + "." + "<br>" + "Current Time: " + hour + " " + prepand + " : " + minute + " : " + second + " ";

} 

setInterval(doDate, 1000);


function print_current_page() {
    // call the window.print() method to initiate the printing of the current page
    window.print();
}