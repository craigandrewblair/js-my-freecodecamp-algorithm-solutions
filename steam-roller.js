// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flatArr = [...arr];
    for(let i = 0; i < flatArr.length; i++){
        flatArr = [].concat(...flatArr);
    }
    console.log(flatArr)
    return flatArr;
}

//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4]