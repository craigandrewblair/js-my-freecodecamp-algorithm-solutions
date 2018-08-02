// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    let capStr = "";
    let arr = after.split("");
    if(before[0].match(/[A-Z]/g)){
        arr[0] = arr[0].toUpperCase();
        capStr = arr.join("");
        console.log(capStr);
    }
    capStr = arr.join("");
    str = str.replace(before, capStr);
    console.log(str);
    return str;
}

//myReplace("Let us go to the store", "store", "mall") ////should return "Let us go to the mall".
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting") ////should return "He is Sitting on the couch".
//myReplace("This has a spellngi error", "spellngi", "spelling") ////should return "This has a spelling error".
//myReplace("His name is Tom", "Tom", "john") ////should return "His name is John".
//myReplace("Let us get back to more Coding", "Coding", "algorithms") ////should return "Let us get back to more Algorithms".