function solution(s) {
  let result = [...s]
    .map((el) => (el === "(" ? 1 : -1))
    .reduce((acc, el) => acc + el, 0);

  return result === 0 ? "YES" : "NO";
}

// stack 사용 풀이 추가
const solution2 = (s) => {
  let answer = "YES";
  let stack = [];

  [...s].forEach((el) => {
    if (el === "(") {
      stack.push(el);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  });

  return stack.length === 0 ? answer : "NO";
};

let a = "(()(()))(()";
console.log(solution(a));
console.log(solution2(a));
