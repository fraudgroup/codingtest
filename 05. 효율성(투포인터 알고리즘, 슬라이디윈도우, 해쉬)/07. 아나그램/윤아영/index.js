function solution(str1, str2) {
  if (str1.length !== str2.length) {
    return "NO";
  }

  const anagram1 = new Map();
  const anagram2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    anagram1.set(str1[i], (anagram1.get(str1[i]) || 0) + 1);
    anagram2.set(str2[i], (anagram2.get(str2[i]) || 0) + 1);
  }

  for (const [alphabet, number] of anagram1) {
    if (anagram2.get(alphabet) !== number) {
      return "NO";
    }
  }

  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
