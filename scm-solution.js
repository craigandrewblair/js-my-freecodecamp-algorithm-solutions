function smallestCommons(arr) {
    let lcm = Math.max(...arr);
    let rangeArr = [];
    for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
        rangeArr.push(i);
    }
    console.log(rangeArr);
    for (let i in rangeArr) {
        let _gcd = gcd(lcm, rangeArr[i]);
        lcm = rangeArr[i] * lcm / _gcd;
    }
    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            console.log(gcd(b, a % b));
            return gcd(b, a % b);
        }
    }
    return lcm;
}

//console.log(smallestCommons([1, 5])) //should return 60.
//console.log(smallestCommons([5, 1])) //should return 60.
//console.log(smallestCommons([2, 10])) //should return 2520.
//console.log(smallestCommons([1, 13])) //should return 360360.
console.log(smallestCommons([23, 18])) //should return 6056820.