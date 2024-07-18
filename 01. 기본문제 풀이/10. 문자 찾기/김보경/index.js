function solution(s, t) {
  let answer = 0;

  let arr = s.split("").forEach((el) => {
    el === t && answer++;
  });

  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
