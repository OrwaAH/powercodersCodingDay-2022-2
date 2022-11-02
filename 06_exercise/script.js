function getLastValue() {
    let weekDays = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];
    weekDays.sort()
    console.log(weekDays);
    return weekDays[weekDays.length -1];
}