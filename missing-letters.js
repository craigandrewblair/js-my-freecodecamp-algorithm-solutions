// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alphaStr = "abcdefghijklmnopqrstuvwxyz";
    let letterIndex = alphaStr.indexOf(str[0]);
    let compareArr = [];
    let missingStr = "";
    for (let i = letterIndex; i < (letterIndex + str.length); i++) {
        compareArr.push(alphaStr[i]);
    }
    for (let i = 0; i < compareArr.length; i++) {
        if (compareArr[i] !== str[i]) {
            missingStr = compareArr[i];
            console.log(missingStr);
            return missingStr;
        }
    }
    missingStr = undefined;
    console.log(missingStr);
    return missingStr;
    
    console.log(str);
    console.log(compareArr);
}

//fearNotLetter("abce") //should return "d".
//fearNotLetter("abcdefghjklmno") //should return "i".
// fearNotLetter("stvwx") //should return "u".
//fearNotLetter("bcdf") //should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.