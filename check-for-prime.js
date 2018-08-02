function chkNumIsPrime(num) {
    let flag = true;
    if(num <= 1){
        console.log(false);
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }
    console.log(flag);
    return flag ? flag : flag;
}

chkNumIsPrime(13);