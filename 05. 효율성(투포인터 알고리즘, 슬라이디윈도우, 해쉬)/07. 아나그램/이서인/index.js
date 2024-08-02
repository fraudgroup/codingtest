function solution(str1, str2) {
  let answer = "YES";

  const hash1 = new Map();
  const hash2 = new Map();

  [...str1].forEach((el) => {
    hash1.set(el, (hash1.get(el) || 0) + 1);
  });

  [...str2].forEach((el) => {
    hash2.set(el, (hash2.get(el) || 0) + 1);
  });

  if (hash1.size !== hash2.size) {
    return "NO";
  }

  for (const [key, value] of hash1) {
    if (hash2.get(key) !== value) {
      return "NO";
    }
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
