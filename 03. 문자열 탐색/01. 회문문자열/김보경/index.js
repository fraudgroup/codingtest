function solution(s) {
  let answer = "YES";

  let arr = s.toLowerCase();
  let n = Math.floor(Math.sqrt(arr.length, 2));

  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      answer = "NO";
    }
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
