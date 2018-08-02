// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {

    arr = [];
    sum = 0;

    for (let i = 2; i <= num; i++) {
        if (chkNumIsPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
    sum = arr.reduce((acc, cur) => acc + cur);

    console.log(arr);

    function chkNumIsPrime(n) {
        let flag = true;
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                flag = false;
            }
        }
        return flag ? flag : flag;
    }
    console.log(sum);
    return sum;
}


// sumPrimes(10) //should return a number.
//sumPrimes(10) //should return 17.
 sumPrimes(977) //should return 73156.