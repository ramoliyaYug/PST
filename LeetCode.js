function solution(digits){
    let a = Number(digits.join(""));
    let b = a + 1;
    return b.split("");
}

console.log(solution([1,2,3,4,9]))
