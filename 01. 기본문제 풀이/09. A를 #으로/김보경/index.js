function solution(s) {
  let answer = "";

  let changeS = s
    .split("")
    .map((el) => (el == "A" ? "#" : el))
    .join("");

  answer = changeS;

  return answer;
}

let str = "BANANA";
console.log(solution(str));
