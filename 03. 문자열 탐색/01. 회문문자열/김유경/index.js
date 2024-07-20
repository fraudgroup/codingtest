function solution(str) {
  return str === str.split("").reverse().join("") ? "YES" : "NO";
}

/** 테스트 */
let str1 = "goooG";
let str2 = "abdba";
let str3 = "aabaad";
let str4 = "aaaaa";

console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
