function solution(s) {
  const onlyAlphabet = s.toLowerCase().replace(/[^a-z]/g, "");

  let backward = 0;
  let forward = onlyAlphabet.length - 1;

  while (backward < forward) {
    if (onlyAlphabet[backward] !== onlyAlphabet[forward]) {
      return "No";
    }
    backward++;
    forward--;
  }

  return "YES";
}

/** 입출력 테스트 */
let str1 = "found7, time: study; Yduts; emit, 7Dnuof"; //Yes
let str2 = "A man, a plan, a canal, Panama"; //Yes
let str3 = "Python is fun!"; //No
let str4 = "No 77lemon, no 9melon"; //Yes

console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
