function addTogether() {
    let curriedFunction1 = addTogether(...arguments);
    
    let curriedFunction2 = curriedFunction1(arg2);
    let a = arguments[0];
    return function(b){ //this function is called immediately with the arguments of 3 passed
        console.log(a + b);
        return a + b;
    }
}

// second parenthesis refers to a function that is called immediately withing the addTogether function
addTogether(2)(3) //should return 5.

//   addTogether(2)([3]) //should return undefined.