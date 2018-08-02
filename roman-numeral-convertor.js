// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// Numeral  I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1,000

function convertToRoman(num) {
    let romanThousands = {
        1: "M",
        2: "MM",
        3: "MMM",
        4: "MMMM",
    };
    let romanHundreds = {
        0: "",
        1: "C",
        2: "CC",
        3: "CCC",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM"
    };
    let romanTens = {
        0: "",
        1: "X",
        2: "XX",
        3: "XXX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC"
    };
    let romanSingles = {
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX"
    };
    let thousandStr = "";
    let hundredStr = "";
    let tensStr = "";
    let singleStr = "";
    let numeralStr = "";

    //create fixed sized array of empty strings
    let numArr = ["", "", "", ""];
    let splitArr = num.toString().split("");
    console.log("splitArr: " + splitArr);

    //populate numArr so tens always start at index 3 regardless of numbers of digits in num
    let numArrIndex = 3;
    for (let i = splitArr.length - 1; i >= 0; i--) {
        numArr[numArrIndex] = splitArr[i];
        numArrIndex = numArrIndex - 1;
    }
    console.log("numArr: " + numArr);

    //thousands
    if (numArr[0] != "") {
        thousandStr = romanThousands[numArr[0]];
    }
    console.log("thousandStr: " + thousandStr);

    //hundreds
    if (numArr[1] != "") {
        hundredStr = romanHundreds[numArr[1]];
    }
    console.log("hundredStr: " + hundredStr);

    //tens
    if (numArr[2] != "") {
        tensStr = romanTens[numArr[2]];

        console.log("tensStr: " + tensStr);
    }

    //singles
    if (numArr[3] != "") {
        singleStr = romanSingles[numArr[3]];
        console.log("singlesStr: " + singleStr);
    }
    numeralStr = "" + thousandStr + hundredStr + tensStr + singleStr;
    return numeralStr;
}

// console.log(convertToRoman(3437))
console.log(convertToRoman(2)) //should return "II".
// console.log(convertToRoman(4)) //should return "IV".
// console.log(convertToRoman(3)) //should return "III".
// console.log(convertToRoman(5)) //should return "V".
// console.log(convertToRoman(9)) //should return "IX".
//  console.log(convertToRoman(12)) //should return "XII".
// console.log(convertToRoman(16)) //should return "XVI".
// console.log(convertToRoman(29)) //should return "XXIX".
// console.log(convertToRoman(44)) //should return "XLIV".
// console.log(convertToRoman(45)) //should return "XLV"
// console.log(convertToRoman(68)) //should return "LXVIII"
// console.log(convertToRoman(83)) //should return "LXXXIII"
// console.log(convertToRoman(97)) //should return "XCVII"
// console.log(convertToRoman(99)) //should return "XCIX"
// console.log(convertToRoman(400)) //should return "CD"
// console.log(convertToRoman(500)) //should return "D"
// console.log(convertToRoman(501)) //should return "DI"
// console.log(convertToRoman(649)) //should return "DCXLIX"
// console.log(convertToRoman(798)) //should return "DCCXCVIII"
// console.log(convertToRoman(891)) //should return "DCCCXCI"
// console.log(convertToRoman(1000)) //should return "M"
// console.log(convertToRoman(1004)) //should return "MIV"
// console.log(convertToRoman(1006)) //should return "MVI"
// console.log(convertToRoman(1023)) //should return "MXXIII"
// console.log(convertToRoman(2014)) //should return "MMXIV"
// console.log(convertToRoman(3999)) //should return "MMMCMXCIX"