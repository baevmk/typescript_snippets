function getSum(num1:number, num2:number):number{
    return num1 + num2;
}

// console.log(getSum(1,4));

function mySum(num1:any, num2:any):number{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof num1 == 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
// console.log(mySum('9',4));

function getName(firstName: string, lastName: string):string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName+ ' ' +lastName
}

// console.log(getName('John'));



// ##################### ARROW FUNCTION #####################

let log = function(message) {
    console.log(message);
}
// Arrow function (Lambda expression in C#)

let doLog = (message) => {
    console.log(message);
}

let OneLineFunction = (message) => console.log(message);    // One Line Function Without Parameters

let WithoutParameters = () => console.log();    // If we dont have parameters - One Line Function Without Parameters

//Function with point object with annotation
let drawPoint = (point) => {
    //...
}

drawPoint({

})