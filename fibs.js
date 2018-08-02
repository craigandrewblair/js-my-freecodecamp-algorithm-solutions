function sumFibs(num) {
    let oddArr = [1,1];
    for(let i = 1; (oddArr[oddArr.length - 1] + oddArr[i-1]) < num; i++){
        oddArr.push(oddArr[i-1] + oddArr[i]);
    }
    console.log(oddArr);
    return num;
}

//sumFibs(5) //should return a number.
sumFibs(1000) //should return 1785.
// sumFibs(4000000) //should return 4613732.
// sumFibs(4) //should return 5.
// sumFibs(75024) //should return 60696.
// sumFibs(75025) //should return 135721