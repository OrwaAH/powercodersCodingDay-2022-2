function reverseNumber(){
    let number = new Array();
    let strNumber = document.getElementById("number").value;
    if (strNumber.includes('-')){
        let numberArr = strNumber.split('')
        number = numberArr.reverse();
        numberSubs = number.pop();
        let reversedNumber = number.join('');
        document.getElementById("reverseNumber").innerHTML = 0 - reversedNumber;
    }else {
        let numberArr = strNumber.split('')
        number = numberArr.reverse();
        let reversedNumber = number.join('');
        document.getElementById("reverseNumber").innerHTML = +reversedNumber;

    }

}