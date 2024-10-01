function snail(array) {
    let result = [];
    
    while (array.length) {
        // Take the first row (outermost)
        result = result.concat(array.shift());

        // Take the last element of each remaining row
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }

        // Take the last row in reverse order
        if (array.length) {
            result = result.concat(array.pop().reverse());
        }

        // Take the first element of each remaining row in reverse order
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    }
    return result;
}

console.log(snail([[1,2,3],[4,5,6],[7,8,9]])); 
