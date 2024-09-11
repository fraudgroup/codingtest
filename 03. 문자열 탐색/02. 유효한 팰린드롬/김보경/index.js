function solution(s) {
  let answer = "YES";
  let s1 = s.toLowerCase().replace(/[^a-z]/g, "");
  let s2 = s1.split("").reverse().join("");
  if (s1 !== s2) {
    answer === "NO";
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
