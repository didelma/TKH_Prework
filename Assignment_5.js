
function multByLen(arr) {
    let output = [];

    for (let x of arr)
        output.push(x * 7);
    return output
};
console.log(multByLen([1,45,32,21,5,17,43,93]))
  