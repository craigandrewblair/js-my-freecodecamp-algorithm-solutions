// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function (firstAndLast) {

    let firstname = firstAndLast.split(" ")[0];
    let lastname = firstAndLast.split(" ")[1];
    let fullname = firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[1];

    this.getFirstName = function () {
        return firstname;
    };
    this.getLastName = function () {
        return lastname;
    };
    this.getFullName = function () {
        return fullname;
    };
    this.setFirstName = function (first) {
        fullname = fullname.replace(firstname, first);
        firstname = first;
    };
    this.setLastName = function (last) {
        fullname = fullname.replace(lastname, last);
        lastname = lastname;
    };
    this.setFullName = function (firstAndLast) {
        fullname = firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[1];
        firstname = firstAndLast.split(" ")[0];
        lastname = firstAndLast.split(" ")[1];
    };
    return firstAndLast;
};

var bob = new Person('Bob Ross');

//console.log(Object.keys(bob).length) //should return 6.
console.log(bob instanceof Person) //should return true.
//console.log(bob.firstName) //should return undefined.
//console.log(bob.lastName) //should return undefined.
//console.log(bob.getFirstName()) //should return "Bob".
console.log(bob.getLastName()) //should return "Ross".
console.log(bob.getFullName()) //should return "Bob Ross".

// bob.setFirstName("Haskell")
// console.log(bob.getFullName()) //should return "Haskell Ross" after bob.setFirstName("Haskell").

// bob.setLastName("Curry");
// console.log(bob.getFullName()) //should return "Haskell Curry" after bob.setLastName("Curry").

// bob.setFullName("Haskell Curry")
// console.log(bob.getFullName()) //should return "Haskell Curry" after bob.setFullName("Haskell Curry").
//  console.log(bob.getFirstName()) //should return "Haskell" after bob.setFullName("Haskell Curry").
//  console.log(bob.getLastName()) //should return "Curry" after bob.setFullName("Haskell Curry").