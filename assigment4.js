function cubeNumber(number) {
    if (typeof number != 'number'){
    return 'Please enter the number';
    }
    else{
    const multiply = number*number*number;
    return multiply;
    }
    }
    // const inputNumber = cubeNumber(4);
    // console.log(inputNumber);


    function matchFinder(string1, string2) {
    if (typeof string1 != 'string' || typeof string2 != 'string') {
    return 'Please enter the String';
    }
    else{
    let inputStrings = string1.includes(string2);
    return inputStrings;
    }
    }
    // const inputStrings = matchFinder("Jhon Doe", "hon");
    // console.log(inputStrings);


    function sortMaker(arr) {
    const Numbers = [];
    for(let i = 0; i <= arr.length; i++){
    const index = i;
    const element = arr[index];
    if(arr[0] == arr[1]){
    return "eqal"
    }
    else if(element >= 0){
    let positive = arr.sort(function(a,b){return b - a})
    Numbers.push(positive);
    }
    else {
    if(element < 0){
    return "Invalid Input"
    }
    }
    }
    return arr;
    }
    // const arrayNumbers = [1, 2];
    // const myArray = sortMaker(arrayNumbers);
    // console.log(myArray);


    function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const showAddress = street + ", " + house + ", " + society;
    return showAddress;
    }
    // let address = {
    // street: 10,
    // house: "15A",
    // society: "Earth Perfect"
    // }
    // console.log(findAddress(address));

    
    function canPay(changeArray, totalDue) {
    if(changeArray[0] === undefined ){
    return "Empty your first number of array, Please input your number"
    }
    else{
    let myTotalMoney = 0;
    for(let i = 0; i < changeArray.length; i++){
    myTotalMoney += changeArray[i];
    }
    if(myTotalMoney >= totalDue){
    return true;
    }
    else{
    return false;
    }
    }
    }
    // const myMoney = [1, 2, 5];
    // const chipsPrice = 10;
    // const pay = canPay(myMoney, chipsPrice);
    // console.log(pay);