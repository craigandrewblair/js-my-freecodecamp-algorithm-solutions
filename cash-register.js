// Design a cash register drawer function checkCashRegister() that accepts 
// 1. purchase price as the first argument (price), 
// 2. payment as the second argument (cash), and 
// 3. cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
// as the value of the change key.

// My Scenario Breakdown:
// 1. Value in drawer is less than change required. Returns {status: "INSUFFICIENT_FUNDS", change: []}
// 2. Value in drawer equals the change required. Returns {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// 3. Value in drawer is sufficient, however correct change is not available. Returns {status: "INSUFFICIENT_FUNDS", change: []}
// 4. Value in drawer is sufficient, and correct change is available. Returns {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

function checkCashRegister(price, cash, cid) {

let changeGivenArr = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED", 0]];
let registerCoinArr = [[0.01, 0, "PENNY"],[0.05, 0, "NICKEL",],[0.1, 0, "DIME"],[0.25, 0, "QUARTER"],[1, 0, "ONE"],[5, 0, "FIVE"],[10, 0, "TEN"],[20, 0],[100, 0, "ONE HUNDRED"]]    
let resultObj = {status: "", change: []}
let change = cash - price;
let valInDrawer = 0; 
// Calculate value cash in the drawer and then round to 2 d.p
for(let i = 0; i < cid.length; i++){ 
    valInDrawer = valInDrawer + cid[i][1];
}
valInDrawer = Math.round(valInDrawer * 100) / 100;
// Add the number of coins/notes for each denomination
for(let j = 0; j < cid.length; j++){ 
    registerCoinArr[j][1] = Math.round(cid[j][1]/registerCoinArr[j][0]);
}
// Scenario 1
if (valInDrawer < change) { 
    resultObj.status = "INSUFFICIENT_FUNDS";
    return console.log(resultObj);
}
// Scenario 2
if (valInDrawer === change) {   
    resultObj.status = "CLOSED";
    resultObj.change = cid;
    return console.log(resultObj);
}

// Check whether exact change is available
for(let i = registerCoinArr.length-1; i >= 0; i--){
    if(change >= registerCoinArr[i][0] && registerCoinArr[i][1] > 0) {
        while((change - registerCoinArr[i][0]) >= 0 && registerCoinArr[i][1] > 0){
            changeGivenArr[i][1] = changeGivenArr[i][1] + registerCoinArr[i][0];
            registerCoinArr[i][1] = registerCoinArr[i][1] - 1;
            change = change - registerCoinArr[i][0];
            change = Math.round(change * 100) / 100;
        }
    }
}
// Scenario 3
if(change !== 0){
    resultObj.status = "INSUFFICIENT_FUNDS";
    return console.log(resultObj);
}
else{ // Scenario 4
    // Format return array by removing arrays with a value of 0
    changeGivenArr = changeGivenArr.filter(function(elem, i, arr){
        return arr[i][1] != 0;
    });
    // Reverse array values to sort in descending order
    let reverseArr = [];
    while(changeGivenArr.length > 0){
        reverseArr.unshift(changeGivenArr.shift());
    }
    changeGivenArr = changeGivenArr.concat(reverseArr);
    reverseArr = [];
    resultObj.status = "OPEN";
    resultObj.change = changeGivenArr;
    return console.log(resultObj);
    }    
}
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
//x checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
//x checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
//x checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
//x checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 

// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
//x checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 