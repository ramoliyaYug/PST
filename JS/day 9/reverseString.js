//reversing string
function reversed(WORD){
    let revWORD="";
    for (let i=WORD.length-1;i>=0;i--) {
        revWORD+=WORD[i];
    }
    return revWORD;
}
console.log(reversed("ramoliya"));