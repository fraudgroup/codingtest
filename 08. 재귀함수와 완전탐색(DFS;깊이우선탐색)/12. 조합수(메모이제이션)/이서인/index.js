function solution(n, r) {
    if (r === 0 || n === r) return 1;
    return solution(n - 1, r -1) + solution(n - 1, r)
}

//console.log(solution(5, 3));
console.log(solution(33, 19));