function weekNumbersToWords(){
    let dayOfTheWeek = document.getElementById("dayNumber").value;
    const days = dayOfTheWeek.split(',');
    const daysWords = new Array();
    let day;
    for (let i=0; i < days.length; i++){
    switch (days[i]) {
        case "1" : 
            day = "Monday";
            break;
        case "2" : 
            day = "Tuesday";
            break;
        case "3" : 
            day = "Wednesday";
            break;
        case "4" : 
            day = "Thursday";
            break;
        case "5" : 
            day = "Friday";
            break;
        case "6" : 
            day = "Saturday";
            break;
        case "7" : 
            day = "Sunday";
            break;
        default : 
            day = "Day is undefined!";
    }
        daysWords.push(day);  
    } 
    document.getElementById("dayOfTheWeek").innerHTML = daysWords;
    }
    