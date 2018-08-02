function addTogether() {
    //checks for extra parenthesis
    let curried = arguments.length <= 1;
    console.log(arguments.length <= 1);
    let arg1 = arguments[0]; //2
    let arg2 = arguments[1]; //undefined
    console.log(arg2); //undefined
    //executed if no extra parethesis are supplied (arguments > 1)
    if (curried == false) {       
        return console.log("i'm not being curried");
    }
    //curried function executed if extra parethesis argument is supplied (arguments <=)
    return function (paren2arg) {
        return console.log("i'm being curried");
    }

}

//addTogether(2, 3)// should return 5.
//addTogether(2)(3) //should return 5.
//addTogether("http://bit.ly/IqT6zt") //should return undefined.
// addTogether(2, "3") //should return undefined.
//addTogether(2)([3]) //should return undefined.