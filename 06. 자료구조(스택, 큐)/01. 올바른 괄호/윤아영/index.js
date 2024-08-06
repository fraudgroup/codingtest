function solution(s) {
  const openBracket = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openBracket.push(s[i]);
      continue;
    }

    if (openBracket[openBracket.length - 1] !== "(") {
      return "NO";
    }

    openBracket.pop();
  }

  return openBracket.length ? "NO" : "YES";
}

let a = "(()(()))(()";
console.log(solution(a));
