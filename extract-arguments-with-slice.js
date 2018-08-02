// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
    arr1 = [...arguments[0]];
    console.log(arr1);
    args = [];
    console.log(arguments);
    args = Array.prototype.slice.call(arguments, 1); //extract arguments using slice
    console.log("args: " + args);
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(args[i] == arr1[j]){
                arr1.splice(j, 1);
                j-=1;
            }
        }
    }
    console.log("arr1: " + arr1);
    return arr1;
  }
  
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
//destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
 //destroyer([2, 3, 2, 3], 2, 3) //should return [].
 //destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") //should return [12,92,65].