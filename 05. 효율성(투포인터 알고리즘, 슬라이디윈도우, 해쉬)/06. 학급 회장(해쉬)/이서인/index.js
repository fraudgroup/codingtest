function solution(s) {
  let answer = "";
  const hash = new Map();

  [...s].forEach((candidate) => {
    hash.set(candidate, (hash.get(candidate) || 0) + 1);
  });

  const elected = Math.max(...Array.from(hash.values()));

  for (const [key, value] of hash) {
    if (elected === value) {
      answer = key;
      break;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
