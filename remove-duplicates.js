for(let i = 0; i <= copyArr.length; i++){
    console.log("uniqueArr: " + uniqueArr);
    console.log("copyArr[i]: " + copyArr[i]);
    console.log("i: " + i);
    console.log("prev: " + copyArr[i-1]);
    console.log("--------------")
    if(copyArr[i] != copyArr[i-1]){
        uniqueArr.push(copyArr[i]);
    };
 }
return copyArr;