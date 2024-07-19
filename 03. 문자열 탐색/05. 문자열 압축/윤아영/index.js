function solution(s) {
  let answer = "";
  let repeatString = "";
  let repeatNumber = 1;

  for (let i = 0; i < s.length; i++) {
    if (repeatString === s[i]) {
      repeatNumber++;
      continue;
    }

    answer += repeatNumber === 1 ? "" : repeatNumber;
    answer += s[i];
    repeatString = s[i];
    repeatNumber = 1;
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
