//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let filterArr = [];
    let arr = [];
    str = str.replace(/-|_/g, " ");
    console.log(str);
    arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i].match(/[a-z]|\s/g)){
            filterArr.push(arr[i]);
        }
        if(arr[i].match(/[A-Z]/g)){
            filterArr.push(" ");
            filterArr.push(arr[i]);
        }
    }
    console.log(filterArr)
    str = filterArr.join('');
    str = str.trim().replace(/\s\s+/g, ' ').replace(/\s/g, '-').toLowerCase();
    console.log(str);
    return str;
}

 //spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
 //spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
 //spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
 //spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
 spinalCase("AllThe-small Things") //should return "all-the-small-things".

        // if(arr[i].match(/-|_|\s/g)){
        //     filterArr.push(" ");
        // }
        // if(arr[i].match(/[A-Z]/g)){
        //     filterArr.push(" ");
        //     filterArr.push(arr[i]);
        // }
        // if(arr[i].match(/[a-z]/g)){
        //     filterArr.push(arr[i]);
        // }