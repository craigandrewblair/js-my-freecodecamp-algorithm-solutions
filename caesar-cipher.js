// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.

function rot13(str) {
    let caesarObj = {"A": "N", "B": "O", "C": "P", "D": "Q", "E": "R", "F": "S", "G": "T", "H": "U", "I": "V", "J": "W", "K": "X", "L": "Y", "M": "Z", "N": "A", "O": "B", "P": "C", "Q": "D", "R": "E", "S": "F", "T": "G", "U": "H", "V": "I", "W": "J", "X": "K", "Y": "L", "Z": "M"}
    let caesarStr = "";
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/[A-Z]/g)) {
            strArr[i] = caesarObj[strArr[i]];
        }
    }
    caesarStr = strArr.join("");
    return caesarStr;
}

console.log(rot13("SERR PBQR PNZC")) //should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")) //should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")) //should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.