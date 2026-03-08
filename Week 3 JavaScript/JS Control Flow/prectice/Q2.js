//  Identify Weekday or Weekend
function checkDay(day) {
    switch (day) {
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Weekday");
    }
}

// Test the function
checkDay("Monday");   
checkDay("Sunday");