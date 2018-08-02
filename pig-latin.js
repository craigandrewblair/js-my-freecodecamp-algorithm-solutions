// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    let arr = [];
    if(str.match(/^[aeiou]/g)){
        str = str.concat('way');
        console.log(str);
        return str;
    }
    arr = str.split("");
    console.log(arr);
    if(arr[0].match(/^[^aeiou]/g)){
        for(let i = 0; i < arr.length; i++){
            if(arr[0].match(/[^aeiou]/)){               
                arr.push(arr[0]);
                arr.shift();
                console.log(arr);
            }
        }
    } 
    str = arr.join("").concat("ay");
    console.log(str);
    return str;
}

//translatePigLatin("california") //should return "aliforniacay".
// translatePigLatin("paragraphs") //should return "aragraphspay".
//translatePigLatin("glove") //should return "oveglay".
//translatePigLatin("algorithm") //should return "algorithmway".
 translatePigLatin("eight") //should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.

