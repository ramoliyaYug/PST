//reversing string
function reversed(WORD){
    let revWORD="";
    for (let i=WORD.length-1;i>=0;i--) {
        revWORD+=WORD[i];
    }
    return revWORD;
}
console.log(reversed("ramoliya"));

//reversing the string using split method
let str = "yug";

let array = str.split("");
let start = 0
let end = array.length-1

while(start < end){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
}
console.log(array.join(""));

//split: it convert string's each index items into the each index of array.
//join:it convert each array index and join them to a single string.
  