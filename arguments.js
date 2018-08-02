// Create a function that sums two arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
    //checks for extra parenthesis
    let arg1 = arguments[0];
    let arg2 = arguments[1]; 
    let oneArg = arguments.length <= 1;
    let validNum1 = Number.isInteger(arguments[0]);
    // checks if argument 1 is valid or not, all calls are supplied with at least one argument
    if(!validNum1){
        return console.log(undefined);
    }
    //executed if more than one argument is supplied
    if (!oneArg) {
        //checks if any of arguments is not a number
        if (Number.isInteger(arg1) === false || Number.isInteger(arg2) === false) { 
            return console.log(undefined);  
        //check if both arguments are valid numbers    
        } else if (Number.isInteger(arg1) === true && Number.isInteger(arg2) === true) {
            return console.log(arg1 + arg2);
        }
    }
    //executed if one or less arguments supplied
    return function (arg) {
        return Number.isInteger(arg) === false ? console.log(undefined) : console.log(arg + arg1);
    }

}

addTogether(2, 3)// should return 5.
addTogether(2)(3) //should return 5.
addTogether("http://bit.ly/IqT6zt") //should return undefined.
addTogether(2, "3") //should return undefined.
addTogether(2)([3]) //should return undefined.
