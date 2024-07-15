function solution(s) {
  return s.toUpperCase() === [...s].reverse().join("").toUpperCase()
    ? "YES"
    : "NO";
}

let str = "goooG";
console.log(solution(str));
