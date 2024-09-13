function solution(s) {
  let result = [...s]
    .map((el) => (el === "(" ? 1 : -1))
    .reduce((acc, el) => acc + el, 0);

  return result === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
