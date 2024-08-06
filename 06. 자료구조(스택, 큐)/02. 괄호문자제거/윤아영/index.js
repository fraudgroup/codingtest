function solution(s) {
  const bracket = [];
  let answer = "";

  for (const character of s) {
    if (character === "(") {
      bracket.push(character);
      continue;
    }

    if (character === ")") {
      bracket.pop();
      continue;
    }

    if (!bracket.length) {
      answer += character;
    }
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
