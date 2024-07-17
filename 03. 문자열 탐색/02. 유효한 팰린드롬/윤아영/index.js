function solution(s) {
  const string = s.toUpperCase().replaceAll(/[^A-Z]/g, "");

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return "NO";
    }
  }

  return "YES";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
