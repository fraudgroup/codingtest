function solution(str1, str2) {
  let answer = "YES";
  let alpha1 = new Map();
  for (let alpha of str1) {
    if (alpha1.has(alpha)) {
      alpha1.set(alpha, alpha1.get(alpha) + 1);
    } else {
      alpha1.set(alpha, 1);
    }
  }

  for (let alpha of str2) {
    if (!alpha1.has(alpha) || alpha1.get(alpha) === 0) {
      return "NO";
    }
    alpha1.set(alpha, alpha1.get(alpha) - 1);
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
